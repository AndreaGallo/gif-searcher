import React from 'react'
import './index.css'
import {Link} from 'wouter'

function Gif({title, id, url}) {
    return (
        <div className='Gif'>
            <Link to={`/gif/${id}`} className='Gif-link'>
                <h4>{title}</h4>
                <img src={url} alt={title}/>
            </Link>
        </div>
    )
}

export default React.memo(Gif)