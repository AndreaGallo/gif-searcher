import {useState} from 'react'

export default function useLocalStorage(key, initialValue){
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = localStorage.getItem(key)
            return value? JSON.parse(value) : initialValue
        } catch (error) {
            return initialValue
        }
    })

    const setValue = (value) => {
        try {
            setStoredValue(value)
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.log(error)
        }
        
    }

    return [storedValue, setValue]
}