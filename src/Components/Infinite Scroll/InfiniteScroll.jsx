import { useEffect } from "react";
export default function InfiniteScroll({setpage,loading}){
    useEffect(()=>{
        function handleScroll(){
            const bottom = window.innerHeight + window.scrollY >= window.document.documentElement.scrollHeight - 100 ; 
            if(bottom) {
                setpage(prev=>prev+1)
            }
        }
        window.addEventListener("scroll",handleScroll)
        return()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    },[setpage,loading])
    return null
}