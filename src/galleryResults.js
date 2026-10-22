export function mergePhotos(current, incoming, replace) {
    const photos = replace ? [] : [...current];
    const ids = new Set(photos.map(photo => photo.id));
    for (const photo of incoming) {
        if (!ids.has(photo.id)) {
            photos.push(photo);
            ids.add(photo.id);
        }
    }
    return photos;
}

export function hasNextPage(response) {
    return Boolean(response.next_page);
}
