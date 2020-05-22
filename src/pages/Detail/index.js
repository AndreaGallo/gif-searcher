import React, {useContext, useEffect} from 'react'
import Gif from 'components/Gif'
import GifsContext from 'contexts/GifsContext'
import useLocalStorage from 'hooks/useLocalStorage'

export default function Detail({ params }) {
    const { id } = params
    const { gifs } = useContext(GifsContext)
    const [gif, setGif] = useLocalStorage(id, {})

    useEffect(() => {
        if(gifs.length) {
            let value = gifs.find(gif => gif.id === id)
            setGif(value)
        }
    }, [gifs, id, setGif])
    
    return <Gif {...gif}/>
}