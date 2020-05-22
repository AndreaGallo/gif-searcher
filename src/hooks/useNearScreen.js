import {useRef, useState, useEffect} from 'react'

export default function useNearScreen({ distance = '100px' } = {}) {
    const [isNearScreen, setShow] = useState(false)
    const ref = useRef()

    const onChange = (entries, observer) => {
        const el = entries[0]

        if(el.isIntersecting){
            observer.disconnect()
            setShow(true)
        }
    }

    useEffect(() => {
        let observer 

        Promise.resolve(IntersectionObserver || import("intersection-observer"))
        .then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: distance // para que cuando este a 100px del viewport se cargue
            })
            
            observer.observe(ref.current)
        })
        
        

        return () => observer.disconnect()
    })

    return { isNearScreen, ref }
}