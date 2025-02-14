import React from "react";
import Images from "./imagesize";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
function Tripdetails (){
    const { title, image } = useParams(); 
    const notify = () => toast(`Pack your bags !An amazing adventure to ${title} awaits you!`);
    return(
        <div>
            <div className="relative w-full">
  
      <div className="relative h-96 md:h-100 w-full">
        <img
          src={`/${image}`}
          alt="Nature Trip"
          className="w-full h-full object-fit"
        />
        
      </div>

      <div className="max-w-4xl mx-auto shadow-lg rounded-2xl p-6 md:p-10 -mt-4 relative z-10  bg-blue-400">
        <h1>Adveture begins with new faces </h1>
        <br></br>
        <p className="text-gray-700 text-lg text-center md:text-xl">
        We bring travel enthusiasts together for unforgettable camping adventures. From riversides to mountains, explore
         stunning landscapes, connect with like-minded adventurers, and let us handle the rest!
        </p>
      </div>
      <div>

         
        <div className="mt-6 space-y-4 py-2 px-2 mb-2">
            <h1>Trip Details </h1>
          <div className="flex items-center text-gray-800">
            <p className="text-lg md:text-xl"><strong>Date:</strong>22 JAN 2025</p>
          </div>

          <div className="flex items-center text-gray-800">
            <p className="text-lg md:text-xl"><strong>Location:</strong>{title}</p>
          </div>

          <div className="flex items-center text-gray-800">
            <p className="text-lg md:text-xl"><strong>Stay:</strong> Comfortable campsites & eco-lodges</p>
          </div>

          <div className="flex items-center text-gray-800">
            <p className="text-lg md:text-xl"><strong>Activities:</strong> Trekking, bonfires, sightseeing & more</p>
          </div>

          <div className="flex items-center text-gray-800">
            <p className="text-lg md:text-xl"><strong>Payment:</strong> Secure & hassle-free</p>
          </div>
        </div>

      
        <div className="mt-6 text-center">
          <button className="px-6 py-3 mb-4 bg-blue-400 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-500 transition"
           onClick={notify}>
            Book Your Trip Now
            <ToastContainer></ToastContainer>
          </button>
        </div>
      </div>
    </div>
            
     

         </div>
    );

}

export default Tripdetails ; 