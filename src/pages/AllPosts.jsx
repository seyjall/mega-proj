import React , {useState , useEffect} from "react"
import appwriteService from"../appwrite/config"
import { Container , PostCard } from "../components"
function AllPosts() {

    const[posts ,setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts().then((posts) =>{
           
            if(posts) {
                setPosts(posts.documents)
            }
        })

    } , [])
    
    return(
        <div className="w-full py-8">
      <Container>
        <div>
            <h1>Discover Travel Tales: Read All Posts by Fellow Adventurers!</h1>
           
        </div>
        <div className="flex  flex-wrap">
            {posts.map((post) => (
                
                <div key = {post.$id} className="p-2 w-1/4 text-black"> 
               {post.featuredImage ? (
            <PostCard $id = {post.$id} 
             title={post.title} 
             featuredImage={post.featuredImage}  />
        ) : (
            <p>Loading...</p>
        )}
                    </div>

            ))}

        </div>
      </Container>

        </div>

    )
}

export default AllPosts