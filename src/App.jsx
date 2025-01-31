import { useEffect, useState  } from 'react'

import './App.css'
import {useDispatch , useSelector} from 'react-redux'
import authService from "./appwrite/auth"
import {login , logout} from "./store/authSlice"
import { Header  , Footer} from './components'
import { Outlet } from 'react-router-dom'
function App() {
//  console.log(process.env.REACT_APP_APPWRITE_URL ) this one when u create using react only 
//use documentation 

// loading state is required whenever you are fetching data 
//from server or on network for conditional rendering 


const [loading , setloading] = useState() ; 
const dispatch = useDispatch(); 
const authStatus = useSelector((state) => state.auth.authStatus);

useEffect(() =>{

  if(authStatus){
    authService.getCurrentUser()
    .then( (userData) => {
     if(userData) {
      dispatch(login({userData}))
     }else{
      dispatch(logout())
     }
    })
    .finally(() => setloading(false))
  }

  }
  ,[dispatch , authStatus])

  return ! loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-slate-100'>
   
      <div className='w-full block'>
         
         <Header></Header>
        <main>
        <Outlet></Outlet>
        </main>
        <Footer></Footer>

      </div>
    </div>
  ) : null
}

export default App

