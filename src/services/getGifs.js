const fromApiResponseToGifs = apiResponse => {
    const {data = []} = apiResponse
    const gifs = data.map(image => {
        const {images, title, id} = image
        const {url} = images.downsized_medium
        return {title, id, url}
    })
    return gifs
}

export default async function getGifs({ keyword = 'panda', limit = 5, page = 0 } = {}) {
    const apiUrl = `${process.env.REACT_APP_API_URL}/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=G&lang=en`
    const res = await fetch(apiUrl)
    const response  = await res.json()
    const gifs = fromApiResponseToGifs(response)
    return gifs
}