import React from "react";
import Images from "./imagesize.jsx"
import { Link } from "react-router-dom";
import Tripdetails from "./Tripdetails.jsx";
function Trips (){

    return(
        <div >

        <div className=" flex justify-center">
            <Link to="/Tripdetails/Uttarakhand/uttarakhand.png"
           > 
           
            <Images src = "1.png" className={"flex-1"}></Images></Link>
        <Link><Images src = "2.png"  className={"flex-1"}></Images></Link> 
       <Link><Images src = "3.png"  className={"flex-1"}></Images></Link>
       <Link><Images src = "4.png"  className={"flex-1"}></Images></Link>

        </div>
        <div className=" flex justify-center">
        <Images src = "2.1.png" className={"flex-1"}></Images>
       <Images src = "2.2.png"  className={"flex-1"}></Images>
       <Images src = "2.3.png"  className={"flex-1"}></Images>
       <Images src = "2.4.png"  className={"flex-1"}></Images>


        </div>
       
        </div>

       
    )

}

export default Trips; 