import Card from "./Card";

export default function Card_Section({ photos }) {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 px-4 py-4 bg-gray-300">
            {photos.map((photo) => (
                <Card
                    key={photo.id}
                    photo={photo}
                />
            ))}
        </div>
    );
}