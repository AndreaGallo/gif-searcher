import React from 'react'

import {Title} from 'react-head'
import {useGifs} from 'hooks/useGifs'
import ListOfGifs from 'components/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'
import SearchForm from 'components/SearchForm'

export default function Home(){
    const {loading, gifs} = useGifs()

    return (
        <>
        <Title>Giffy | Searching gifs</Title>
            <SearchForm />
            <div className="App-wrapper">
                <div className='App-main'>
                    <div className='App-results'>
                        <h3 className="App-title">Last search</h3>
                        <ListOfGifs gifs={gifs} loading={loading}/>
                    </div>
                    <div className='App-category'>
                        <TrendingSearches />
                    </div>
                </div>
            </div>
            
        </>
    )
}