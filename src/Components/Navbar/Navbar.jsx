import { useState } from "react";

function Navbar({paginate,setpaginate}){
    return(
        <>
        <div className="flex fixed top-0 left-0 z-50 bg-black h-13 w-full p-2 items-center justify-between">
            <h1 className="font-extrabold text-3xl tracking-tight text-white">
                Art<span className="text-blue-400">ify</span>
            </h1>
            <div className="h-7 w-65 flex items-center justify-between">
                <button className={`h-full w-1/2 flex items-center justify-center cursor-pointer  font-bold ${paginate?"bg-white rounded-full text-black": "bg-transparent text-white"} transition-transform hover:scale-105`}
                    onClick={()=>{setpaginate(true)}}
                >Pagination</button>
                <button className={`h-full w-1/2 flex items-center justify-center cursor-pointer font-bold  ${(!paginate)?"bg-white rounded-full text-black ": "bg-transparent text-white"} transition-transform hover:scale-105`}
                    onClick={()=>{setpaginate(false)}}
                >Infinite Scroll</button>
            </div>
        </div>
        </>
    )
}

export default Navbar;