import React, { useRef, useEffect, useCallback } from 'react'
import {Title} from 'react-head'
import ListOfGifs from 'components/ListOfGifs'
import SearchForm from 'components/SearchForm'
import { useGifs } from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import throttle from 'just-throttle'

export default function SearchResults({ params }) {
    const {keyword, rating} = params
    const {loading, gifs, setPage} = useGifs({ keyword, rating })
    const title = decodeURI(keyword)
    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({ distance: '300px', externalRef, once: false })
    

    const handleNextPage = useCallback(throttle(
        () => setPage(prevPage => prevPage + 1) , 500
    ), [])

    useEffect(() => {
        if(isNearScreen) handleNextPage()
    }, [handleNextPage, isNearScreen])
    
    return (
        <div className="App-wrapper">
            <Title>Giffy | {title}</Title>
            <SearchForm initialKeyword={keyword} initialRating={rating}/>
            <ListOfGifs title={title} gifs={gifs} loading={loading}/>
            <div id="visor" ref={externalRef}></div>
        </div>
    
    )
}