import React , {useEffect ,  useState} from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config"
import { Container , PostCard } from "../components";
import { useSelector } from "react-redux";
function Home () {
    const[posts , setPosts ] = useState([]) ;
    const { status: authStatus, userData } = useSelector((state) => state.auth); 
  useEffect (()=>{
    if(authStatus){
      appwriteService.getPosts().then((posts) =>{

        if(posts){
         setPosts(posts.documents)
        } 
     })
      
    }

  } , [])

  if(posts.length === 0){
    return (
      <div className="bg-gray-50 min-h-screen mx-0 flex items-center justify-center py-16">
      <Container>
      <div className="relative w-full h-screen overflow-hidden">
 
  <video 
    className="absolute top-0 left-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="background.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="relative z-10 flex flex-col h-full text-white text-center">
  
  <div className="absolute top-10 left-10">
    <h1 className="font-mogra text-7xl md:text-8xl lg:text-9xl font-bold">
      Inhale Freedom,
    </h1>
  </div>

  
  <div className="absolute top-60 left-0 w-full px-10 md:top-96 md:px-20 justify-center">
  <h1 className="font-mogra text-3xl md:text-6xl lg:text-7xl font-bold text-center md:text-left">
    Exhale Worries
  </h1>
</div>


  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
  <p className="text-2xl md:text-3xl lg:text-4xl mt-4 text-center">
    Your next journey into nature starts here
  </p>
</div>
   
  </div>
  
  
  
   </div>
        <div className="flex flex-wrap items-center justify-center">
          <div className="p-6 w-full max-w-lg bg-white rounded-xl shadow-xl text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Login to Read Posts
            </h1>
            <p className="text-gray-600 mb-4">
              Sign in to access your posts and discover new content.
            </p>
            <Link
              to="/login"
              className="text-lg font-medium text-primary transition-all duration-200 hover:underline"
            >
              Go to Login
            </Link>
          </div>
        </div>
      </Container>
    </div>
    )
  }
  return(
    <div className="bg-gray-50 min-h-screen py-16">
    <Container>
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Latest Posts
        </h1>
        <p className="text-lg text-gray-600">
          Check out the most recent articles from our community.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {posts.map((post) => (
          <div
            key={post.$id}
            className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          >
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </Container>
  </div>

  );
}

export default Home; 

