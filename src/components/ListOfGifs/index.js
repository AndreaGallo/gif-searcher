import React from 'react'
import Gif from 'components/Gif'
import Spinner from 'components/Spinner'
import './index.css'

export default function ListOfGifs({ gifs, loading, title }) {

    return (
        loading
        ? <Spinner />
        : 
        <>
            <h3>{title}</h3>
            <div className="ListOfGifs">
                {
                    gifs.map(({id, title, url}, index) => (
                        <Gif key={id + index} 
                            id={id}
                            title={title}
                            url={url}/>
                        )
                    )
                }
            </div>
        </>
        
    )
}