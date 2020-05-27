import React, { Suspense } from 'react'
import useNearScreen from 'hooks/useNearScreen'
import Spinner from 'components/Spinner'

const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
)

export default function LazyTrending() { 
    const {isNearScreen, ref} = useNearScreen()

    return <div ref={ref}>
        <Suspense fallback={<Spinner />}>
            {isNearScreen ? <TrendingSearches /> : null}
        </Suspense>
    </div>
}