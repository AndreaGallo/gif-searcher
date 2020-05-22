import React from 'react'
import {Link} from 'wouter'

import './index.css'

export default function Category({name, options = []}) {
    return (
        <div className='Category'>
            <h3 className='Category-title'>{name}</h3>
            <ul className='Category-list'>
                {
                    options.map(option => (
                        <li key={option}>
                            <Link to={`/search/${option}`} className='Category-link'>
                                {option}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}