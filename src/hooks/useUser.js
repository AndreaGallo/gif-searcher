import { useContext, useCallback, useState } from 'react'
import UserContext from 'contexts/UserContext'
import loginService from 'services/login'
import addFavService from 'services/addFav'

export default function useUser() {
    const { favs, jwt, setJWT, setFavs } = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const login = useCallback(({ username, password }) => {
        setLoading(true)
        setError(false)
        loginService({ username, password })
            .then(jwt => {
                console.log(jwt)
                setLoading(false)
                setJWT(jwt)
                window.sessionStorage.setItem('jwt', jwt)
            })
            .catch(error => {
                setLoading(false)
                setError(true)
                window.sessionStorage.removeItem('jwt')
                console.log(error)
            })
    }, [setJWT])

    const logout = useCallback(() => {
        setJWT(null)
        window.sessionStorage.removeItem('jwt')
    }, [setJWT])

    const addFav = useCallback(({ id }) => {
        addFavService({ id, jwt })
            .then(setFavs)
            .catch(error => {
                console.log(error)
            })
    }, [jwt, setFavs])

    return {
        addFav,
        deleteFav: () => {},
        favs,
        isLogged: Boolean(jwt),
        login,
        logout,
        loading,
        error
    }
}