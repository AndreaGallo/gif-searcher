import React from 'react'
import ListOfGifs from 'components/ListOfGifs'
import { useGifs } from 'hooks/useGifs'

export default function SearchResults({ params }) {
    const {keyword} = params
    const {loading, gifs, setPage} = useGifs({ keyword })
    const title = decodeURI(keyword)

    const handleOnClick = () => {
        setPage(prevPage => prevPage + 1)
    }
    
    return (
        <>
            <ListOfGifs title={title} gifs={gifs} loading={loading}/>
            <button onClick={handleOnClick}>Go to next page</button>
        </>
    
    )
}