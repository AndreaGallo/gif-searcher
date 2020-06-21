import React, { createContext, useState, useEffect } from 'react'
import getFavs from 'services/getFavs'

const Context = createContext({})

export function UserContextProvider({ children }) {
    const [jwt, setJWT] = useState(() => window.sessionStorage.getItem('jwt'))
    const [favs, setFavs] = useState([])

    useEffect(() => {
        if (!jwt) setFavs([])

        getFavs({ jwt })
            .then(setFavs)
            .catch(error => {
                console.log(error)
            })
    }, [jwt])

    return (
        <Context.Provider value={{ favs, jwt, setJWT, setFavs }}>
            {children}
        </Context.Provider>
    )
}
export default Context