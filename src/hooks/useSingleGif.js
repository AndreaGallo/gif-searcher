import {useEffect, useState} from 'react'
import useGlobalGifs from 'hooks/useGlobalGifs'
import useLocalStorage from 'hooks/useLocalStorage'
import getSingleGif from 'services/getSingleGif'

export default function useSingleGif({id}) {
    const gifs = useGlobalGifs()
    const [gif, setGif] = useLocalStorage(id, {})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    
    useEffect(() => {
        if(gif.id !== id) {
            let value
            if(gifs.length) {
                value = gifs.find(gif => gif.id === id)
            }
            
            if (!value) {
                setLoading(true)
                getSingleGif({id})
                .then(data => {
                    setLoading(false)
                    setGif(data)
                    setError(false)
                })
                .catch(() => {
                    setLoading(false)
                    setError(true)
                })
            } else {
              setGif(value)
            }
        }
        
    }, [gif, gifs, id, setGif])

    return {gif, loading, error}
}