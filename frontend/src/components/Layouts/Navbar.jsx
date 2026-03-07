import React from "react";
import ProfileInfoCard from "../Cards/ProfileInfoCard";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return (
        <div className="h-25 bg-white border border-gray-300/50 backdrop-blur-[2px] py-2.5 px-4 md:px-0 sticky top-0 z-30">
            <div className="container mx-auto flex items-center justify-between gap-5 ">
                <Link to="/dashboard">
                <h2 className="text-lg md:text-xl fontmedium text-black font-bold leading-5">Prep Buddy AI</h2>
                </Link>
            <ProfileInfoCard/>
            </div>
        </div>
    )
}
export default Navbar;