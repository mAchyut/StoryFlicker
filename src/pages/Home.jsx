import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
      setLoading(false)
    });
  }, []);
  
if(loading){
  return <div className="flex items-center justify-center min-h-screen bg-white">
  <img src={"https://i.pinimg.com/originals/9f/5b/a6/9f5ba6b38c4259a23c5965a8164ec86f.gif"} className="w-full max-w-xs bg-white"/>
</div>
}
  else if(posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100 rounded-xl">
            <div className="p-4 w-full max-w-md bg-white rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold text-center text-gray-800 hover:text-gray-600">
                 Login to read posts!
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
