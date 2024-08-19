import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
      <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border border-gray-300 rounded-xl p-4 bg-gray-100 shadow-md">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl"
          />
    
          {isAuthor && (
            <div className="absolute right-6 top-6 flex space-x-3">
            <Link to={`/edit-post/${post.$id}`}>
              <Button bgColor="bg-blue-400 hover:bg-blue-500" className="mr-3">
                Edit
              </Button>
            </Link>
            <Button bgColor="bg-red-400 hover:bg-red-500" onClick={deletePost}>
              Delete
            </Button>
          </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{post.title}</h1>
        </div>
        <div className="prose prose-lg max-w-none">
          {parse(post.content)}
        </div>
      </Container>
    </div>
    
     ) : <div className="flex items-center justify-center min-h-screen bg-white">
     <img src={"https://i.pinimg.com/originals/9f/5b/a6/9f5ba6b38c4259a23c5965a8164ec86f.gif"} className="w-full max-w-xs bg-white"/>
   </div>;
}