import React from 'react'
import Gif from 'components/Gif'
import useSingleGif from 'hooks/useSingleGif'
import Spinner from 'components/Spinner'
import { Redirect } from 'wouter'
import {Title} from 'react-head'

export default function Detail({ params }) {
    const {gif, error, loading} = useSingleGif({id : params.id})
    
    if(loading) return <Spinner />
    if(error) return <Redirect to="/404" />
    if (!gif) return null

    return <>
        <Title>Giffy | {gif.title}</Title>
        <h3 className="App-title">{gif.title}</h3>
        <Gif {...gif}/>
    </>
}