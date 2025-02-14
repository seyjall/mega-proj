import { SiLemonsqueezy } from "react-icons/si"

const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL) , 
  
    appwriteProjectid : String(import.meta.env.VITE_APPWRITE_PROJECT_ID) , 
    appwriteDatabaseid : String(import.meta.env.VITE_APPWRITE_DATABASE_ID) , 
    appwriteCollectionid : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID) , 
    appwriteBucketid : String(import.meta.env.VITE_APPWRITE_BUCKET_ID) , 
    
}   
 
export default conf 
//instead of using always import.meta.env and all u start 
//with conf now and assured is its always gonna be string 
//conf declared here is an object and u are exporting an object 