import React, { useEffect, useState } from 'react';
import { Container, PostForm } from '../components';
import appwriteService from '../appwrite/config';
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPost] = useState(null); 
    const { slug } = useParams(); //to get id from the url
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post); 
                }
            })
               // Improvement: Missing .finally() to handle loading state
        } else {
            navigate('/'); 
        }
    }, [slug, navigate]);

    return post ? ( 
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : <div className="flex items-center justify-center min-h-screen bg-white">
     <h1 className='text-xl'>Updating your post, Please Wait...</h1>
  </div>
}

export default EditPost;


