function Card({photo}){
    return(
        <div className="h-90 w-85 m-4 rounded-2xl overflow-hidden hover:cursor-pointer hover:scale-110 transition-transform duration-400 shadow-md">
            <img
                src={photo.src.portrait}
                alt={photo.alt}
                className="w-full h-full object-cover"
                onClick={()=>{window.open(photo.url,"_blank")}}
            />
        </div>
    )
}

export default Card;