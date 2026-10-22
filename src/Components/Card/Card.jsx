import { useState } from "react";

function Card({photo}){
    const [failed, setFailed] = useState(false);
    return(
        <div className="w-full aspect-4/5 rounded-2xl overflow-hidden shadow-md">
            <a className="block w-full h-full" href={photo.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${photo.alt || "photo"} on Pexels (opens in a new tab)`}>
                {failed ? <span className="flex h-full items-center justify-center bg-gray-200 p-4">Image unavailable. View on Pexels.</span> : <img
                    src={photo.src.portrait}
                    alt={photo.alt || "Pexels photo"}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    onError={() => setFailed(true)}
                />}
            </a>
        </div>
    )
}

export default Card;
