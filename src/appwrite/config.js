import conf from "../conf/conf.js";
import {Client , ID , Databases , Storage , Query} from "appwrite";

export class Service{
client = new  Client() ; 
databases ; 
bucket ; 


constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectid)
      this.databases = new Databases(this.client) ;
      this.bucket = new Storage(this.client) ; 
}




async createPost ({title , slug , content , featuredImage , status , userId}){
    try{
        return await this.databases.createDocument(
            conf.appwriteDatabaseid , 
            conf.appwriteCollectionid , 
            slug ,
            {
                title , 
                content , 
                featuredImage , 
                status , 
                userId , 
            }
        )

    }catch(error) {
       
       
        console.log(error);

        
    }
}

async updatePost (slug , {title , content , featuredImage , status}) {
    try{

        return await this.databases.updateDocument(
            conf.appwriteDatabaseid ,
            conf.appwriteCollectionid , 
            slug , 
            {
                title , 
                content , 
                featuredImage , 
                status 
            }

        )
    }catch(error){
        console.log(error ); 
    }
}

async deletePost (slug ){
    try{
         await this.databases.deleteDocument(
            conf.appwriteDatabaseid , 
            conf.appwriteCollectionid , 
            slug 
        )

        return true ; // deleted 

    }catch(error){
        console.log(error);
        return false ; 
    }
}

async getPost (slug) {
    try{
        //when only single post u want to get 
        return await this.databases.getDocument(
            conf.appwriteDatabaseid ,
            conf.appwriteCollectionid,  
            slug 

        )
    }catch(error) {
        console.log(error);
        return false ; 
    }
}
//queries is var and inside array u can pass all the queries , syntax 
async getPosts(queries = [Query.equal("status" , "active")]){
    //when u want to get all the post which are active 
  
    try {
         
        return await this.databases.listDocuments(
            conf.appwriteDatabaseid , 
            conf.appwriteCollectionid , 
            queries 
            //or you can also write the array here 
        )
    } catch (error) {
        console.log("error from getPosts " , error);
        return false ; 
        
    }
}

  // Buckets provide a way to logically group related files together
async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appwriteBucketid , 
            ID.unique(),
            file
        )
        
    } catch (error) {
        console.log("file no uploaded properly " , error );
        return false ; 
        
    }
}

async deleteFile(fileId) {
    try {

        await this.bucket.deleteFile(
            conf.appwriteBucketid , 
            fileId 
            
        )

        return true ; 
        
    } catch (error) {
        console.log(error);
        return false ; 
        
    }
}


//since this get file is fast so no need for async 
getFilePreview(fileId) {
    if (!fileId) {
        console.error("🚨 ERROR: fileId is missing in getFilePreview!");
        return null; // Avoid calling Appwrite if fileId is missing
    }


    return this.bucket.getFilePreview(
        conf.appwriteBucketid , 
        fileId 
    )
}




}
//u need document id so u will either identify it using slug or else with unique id 
//in appwrite storage service data is stored in container named as bucket 
//storage is used when u want to store images , files , audio  , store files etc 
//and database store user profiles , store structured data 






const service = new Service() ; 
export default service 
//directly Service (class) export karne se achha uska obj export kar dete service 
//slug : kind of primary key (uniq for identification)
//and creates in format of human readable url 
