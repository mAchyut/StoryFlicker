import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from '../appwrite/config'



function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        
        appwriteService.getPosts([]).then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
        .finally(()=> setLoading(false))
        
    }, [])
    
  return loading ? <div className="flex items-center justify-center min-h-screen bg-white">
  <img src={"https://i.pinimg.com/originals/9f/5b/a6/9f5ba6b38c4259a23c5965a8164ec86f.gif"} className="w-full max-w-xs bg-white"/>
</div> : (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>{posts.map((post)=> 
            <div key={post.$id} className='p-2 lg:w-1/4 sm:w-1/2'>
            <PostCard 
                $id={post.$id} 
                title={post.title} 
                featuredImage={post.featuredImage} 
            />
        </div>
            )}</div>
        </Container>
    </div>
  )
}

export default AllPosts