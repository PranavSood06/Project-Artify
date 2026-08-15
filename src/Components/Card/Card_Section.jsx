import Section_1 from "../Section_1/Section_1";
import Card from "./Card";
export default function Card_Section({photos}){
    return(
        <>
            <div className=" flex items-center justify-center flex-wrap h-auto w-auto bg-gray-300">
                {photos.map((photo) => (
                    <Card
                        key={photo.id}
                        photo = {photo}
                    />
                ))}
            </div>
        </>
    )
}