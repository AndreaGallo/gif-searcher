import React, {useState} from 'react'
import {useLocation} from 'wouter'
import {useGifs} from 'hooks/useGifs'
import ListOfGifs from 'components/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'

export default function Home(){
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs()

    const handleChange = evnt => {
        setKeyword(evnt.target.value)
    }

    const handleSubmit = evnt => {
        evnt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="Search a gif here..." type='text' value={keyword} onChange={handleChange}/>
            </form>
            <div className='App-main'>
                <div className='App-results'>
                    <h3 className="App-title">Last search</h3>
                    <ListOfGifs gifs={gifs} loading={loading}/>
                </div>
                <div className='App-category'>
                    <TrendingSearches />
                </div>
            </div>
        </>
    )
}