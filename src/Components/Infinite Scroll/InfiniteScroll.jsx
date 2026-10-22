import { useEffect, useRef } from "react";

export default function InfiniteScroll({ setpage, loading, hasMore }) {
    const requestLocked = useRef(false);

    useEffect(()=>{
        function handleScroll(){
            const bottom = window.innerHeight + window.scrollY >= window.document.documentElement.scrollHeight - 100 ; 
            if (bottom && !loading && hasMore && !requestLocked.current) {
                requestLocked.current = true;
                setpage(prev=>prev+1)
            }
        }
        window.addEventListener("scroll",handleScroll)
        return()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    },[setpage, loading, hasMore])

    useEffect(() => {
        if (!loading) {
            requestLocked.current = false;
        }
    }, [loading]);

    return null
}
