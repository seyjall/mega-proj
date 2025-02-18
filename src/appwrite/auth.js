import conf from "../conf/conf.js";
import {Client , Account , ID} from "appwrite";



export class AuthService {
    client = new Client();
    account;


    constructor(){
        this.client
          .setEndpoint(conf.appwriteUrl)
          .setProject(conf.appwriteProjectid)

          this.account = new Account (this.client) ; 
    }

    async  createAccount ({email , password , name}){
        
        try{
          const userAccount =   await this.account.create(
             ID.unique() , email , password ,name
            );    
            
            
            if(userAccount) {
             
                return this.login({email , password});
    
             
            }else{
                    return userAccount ; 
            }
        }
        catch(error){
            // console.log("createaccount method error :" , error.response.message) 
            throw error ; 
        }
    }
   

    async login({ email, password }) {
        try {

        
     
            const userLogin = await this.account.createEmailPasswordSession(email, password);
            console.log("session created " , userLogin)
            return userLogin;
           
           
           
        } catch (error) {
            
                console.error('Login failed:', error.message);
                throw error; 
            
        }
    }
    

    async getCurrentUser () {
        try{
           

            return await this.account.get(); 
         
        }catch(error){
            console.log("getcurrentuser method error :" , error.response.message)
           throw error ; 
        
        }

   
    }

    async logout() {
        try{
             await this.account.deleteSessions();
        }
        catch(error) {
            console.log("logout method error :" , error)
        }
    }


}

const authService = new AuthService(); 



export default authService

