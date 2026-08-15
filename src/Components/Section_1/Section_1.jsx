import Card from "../Card/Card";
import Btn from "../Button/Btn";
import axios from "axios";
import { useEffect , useState } from "react";
import Card_Section from "../Card/Card_Section";
import SearchBar from "../SearchBar/SearchBar";
import Navbar from "../Navbar/Navbar";
import Pagination from "../Pages/Pagination";
import InfiniteScroll from "../Infinite Scroll/InfiniteScroll";
import Spin from "../Spinner/Spin";
export default function Section_1({paginate}) {
    const api_key = import.meta.env.VITE_PIXELS_API_KEY;
    const [query,setquery] = useState("AI");
    const [page,setpage] = useState(1);
    const [photos,setphotos] = useState([]);
    const [loading,setloading] = useState(true)
    useEffect(() => {
        async function fetchdata(){
            const response = await axios.get(`https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=32`,
                {
                    headers: {
                        Authorization: api_key,
                    },
                }
            );
            if(paginate){
                setphotos(response.data.photos);
            }    
            setTimeout(() => {
                if(!paginate){
                    setloading(false);
                    setphotos(prev=>[
                    ...prev,
                    ...response.data.photos
                ])
            }},500);
        }
        try{
            setloading(true);
            fetchdata();
        }catch(error){
            setloading(false);
            console.log(error);
        }
    }, [query,page])

return (
    <>
        <SearchBar setQuery={setquery}/>
        <Card_Section photos={photos}/>
        {paginate && <Pagination page={page} setpage={setpage}/>}
        {!paginate && loading && <Spin/>}
        {!paginate && <InfiniteScroll setpage={setpage} loading={loading}/>}
    </>
)
}
