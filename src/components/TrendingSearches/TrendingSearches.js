import React, {useState, useEffect} from 'react'
import getTrendingSearches from 'services/getTrendingSearches'
import Category from 'components/Category'

export default function TrendingSearches() {
    const [trends, setTrends] = useState([])

    useEffect(() => {
        getTrendingSearches().then(setTrends)
    }, [])

    return <Category name='Trendings' options={trends}/>
}