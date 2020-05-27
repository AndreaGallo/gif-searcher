import React, {Suspense} from 'react';
import './App.css';
import {Link, Route} from 'wouter'
import StaticContext from 'contexts/StaticContext'
import Logo from 'components/Logo'
import {GifContextProvider} from 'contexts/GifsContext'


const Home = React.lazy(() => import('pages/Home'))
const SearchResults = React.lazy(() => import('pages/SearchResults'))
const Detail = React.lazy(() => import('pages/Detail'))

function App() {
  
  return (
    <StaticContext.Provider value={{name: 'is-provider'}}>
      <div className="App">
        <section className="App-content">
          <Link to='/'>
            <Logo className='App-logo'/>
          </Link>
          <Suspense fallback={null}>
            <GifContextProvider>
              <Route 
                component={Home}
                path='/' 
              />
              <Route 
                component={SearchResults}
                path='/search/:keyword' 
              />
              <Route 
                component={Detail}  
                path='/gif/:id' />
            </GifContextProvider>
          </Suspense>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
