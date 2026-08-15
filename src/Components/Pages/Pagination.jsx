import Btn from "../Button/Btn"
export default function Pagination({page,setpage}){
    function prev(){
        if(page===1) return;
        setpage(prev=>prev-1)
    }
    function next(){
        setpage(prev=>prev+1)
    }
    return(
        <div className="bg-gray-300 h-15 w-full flex justify-center items-center">
            <Btn name="Prev" handleClick={prev} classname={"flex justify-center items-center bg-black text-white font-extrabold h-[70%] w-[10%] mr-6 rounded-xl cursor-pointer active:scale-105 transition-transform duration-250"}/>
            <h1 className="text-xl font-bold text-black bg-white px-5 py-2 rounded-xl shadow-lg hover:scale-110 transition-transform duration-200">
                {page}
            </h1>
            <Btn name="Next" handleClick={next} classname={"flex justify-center items-center bg-black text-white h-[70%] w-[10%] font-extrabold ml-6 rounded-xl cursor-pointer active:scale-105 transition-transform duration-250"}/>
        </div>
    )
}