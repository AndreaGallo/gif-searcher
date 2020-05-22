export default async function getTrendindSearches() {
    const apiUrl = `${process.env.REACT_APP_API_URL}/trending/searches?api_key=${process.env.REACT_APP_API_KEY}`
    const res = await fetch(apiUrl)
    const response  = await res.json()
    const { data = []} = response
    return data
}