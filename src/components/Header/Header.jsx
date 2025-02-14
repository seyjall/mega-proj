import {Container , Logo ,Logoutbtn}  from "../index";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//to check user is logged in or not 
import React from 'react'; 
import { useNavigate } from "react-router-dom";



function Header () {
    const authStatus = useSelector((state) => state.auth.status)
  

    const navigate = useNavigate() 


    const navItems = [
        {
            name : 'Home' , 
            slug : "/" , 
            active : true 
        },
        {
            name : "Login" , 
            slug : '/login' , 
            active : !authStatus 
        },
        {
            name : "Signup" , 
            slug :"/signup" , 
            active : !authStatus 
        },
        {
            name : "All Posts" , 
            slug : "/all-posts" , 
            active :authStatus , 
        },
        {
            name : "Add Post" , 
            slug : "/add-post" , 
            active : authStatus
        },
        {
            name : "Join In" , 
            slug : "/Join-in" , 
            active : !authStatus
        },
    ]
   
   
    return(

    <header className="bg-gray-800 text-white">
    <Container>
        <nav className="flex items-center justify-between ">
            <div className="flex items-center">
                <Link to="/">
                    <Logo className="h-8 w-auto" />
                </Link>
            </div>
            <ul className="flex space-x-4">
                {navItems.map((item) =>
                    item.active ? (
                        <li key={item.name}>
                            <button
                                onClick={() => navigate(item.slug)}
                                className="text-gray-700 hover:text-gray-500 transition duration-200"
                            >
                                {item.name}
                            </button>
                        </li>
                    ) : null
                )}

                {authStatus && (
                    <li>
                        <Logoutbtn className="bg-red-600 hover:bg-red-500 text-black font-bold py-2 px-4 rounded transition duration-200" />
                    </li>
                )}
            </ul>
        </nav>
    </Container>
</header>
    )
}

export default Header ; 

