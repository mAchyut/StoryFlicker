import conf from "../conf/conf";
import { Client, ID, Storage, Query, Databases} from 'appwrite'

export class Service{
    client = new Client()
    databases;
    bucket;
    
    constructor(){
        this.client
         .setEndpoint(conf.appwriteUrl)
         .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    
    //Create a post/blog, think
    async createPost({title, slug, content, featuredImage, status, userId}){
      try {
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title, 
                content,
                featuredImage,
                status,
                userId
            }
        )
      } catch (error) {
        console.log(`Appwrite Service :: createPost :: error ${error}`)
      }
    }

    //Update Post, think
    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log(`Appwrite Service :: updatePost :: error ${error}`)
        }
    }

    //Delete Post, think
    async deletePost(slug){
       try {
         await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
         return true
       } 
       catch (error) {
        console.log(`Appwrite Service :: deletePost :: error ${error}`)
        return false
       }
    }

    //Get Post, think
    async getPost(slug){
        try {
           return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId, 
                slug
            )
        }
        catch (error) {
            console.log(`Appwrite Service :: getPost :: error ${error}`)
        }
    }

    //get Posts(active), think
    async getPosts(queries = [Query.equal('status', 'active')]){
       try {
         return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries
         )
       } 
       catch (error) {
        console.log(`Appwrite Service :: getPosts :: error ${error}`)
        return false
       }
    }

    // File upload service, think
    async uploadFile(file){
      try {
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )
      } catch (error) {
        console.log(`Appwrite Service :: uploadFile :: error ${error}`)
        return false
      }
    }

    //Delete file, think
    async deleteFile(fileId){
        try {
             await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } 
        catch (error) {
            console.log(`Appwrite Service :: deleteFile :: error ${error}`)
            return false
        }
    }

    // Get file, think
    getFilePreview(fileId) {
        if (!fileId) {
            throw new Error("Missing required parameter: fileId");
        }
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        );
    }
    
}


const service = new Service()

export default service