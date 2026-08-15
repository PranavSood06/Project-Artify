import { useState } from "react";
import Btn from "../Button/Btn";
import { Search } from "lucide-react";
export default function SearchBar({ setQuery }) {
    const [input, setInput] = useState("");

    function submitHandler(e) {
        e.preventDefault();
        if(input.trim()=="") return;
        setQuery(input);
        console.log(input);
    }

    return (
        <div className="flex items-center justify-center h-13 w-full bg-gray-300">
            <form
                onSubmit={submitHandler}
                className="flex justify-between items-center h-[80%] border-2 w-[75%] pl-7 bg-white rounded-full"
            >
                <input
                    className="bg-white h-full w-[90%] pl-0 outline-none"
                    placeholder="EXPLORE"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />

                <Btn name={<Search/>} classname={"flex justify-center items-center bg-black text-white h-full w-[10%] rounded-r-full font-extrabold cursor-pointer active:scale-105 transition-transform duration-250"} type={"submit"}/>
            </form>
        </div>
    );
}