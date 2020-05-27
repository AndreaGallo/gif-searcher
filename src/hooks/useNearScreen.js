import {useRef, useState, useEffect} from 'react'

export default function useNearScreen({ distance = '100px', externalRef, once = true } = {}) {
    const [isNearScreen, setShow] = useState(false)
    const ref = useRef()
    

    const onChange = (entries, observer) => {
        const el = entries[0]

        if(el.isIntersecting){
            once && observer.disconnect()
            setShow(true)
        } else {
            !once && setShow(false)
        }
    }

    useEffect(() => {
        let observer 
        const element = externalRef ? externalRef.current : ref.current
      
        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
            ? IntersectionObserver
            : import('intersection-observer')
        )
        .then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: distance // para que cuando este a 100px del viewport se cargue
            })
            
            element && observer.observe(element)
        })
        
        

        return () => observer && observer.disconnect()
    })

    return { isNearScreen, ref }
}