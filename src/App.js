import React, {Suspense} from 'react';
import './App.css';
import {Link, Route} from 'wouter'
import { HeadProvider} from 'react-head';
import Logo from 'components/Logo'
import {GifContextProvider} from 'contexts/GifsContext'


const Home = React.lazy(() => import('pages/Home'))
const SearchResults = React.lazy(() => import('pages/SearchResults'))
const Detail = React.lazy(() => import('pages/Detail'))

function App() {
  
  return (
    <HeadProvider>
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
                path='/search/:keyword/:rating?' 
              />
              <Route 
                component={Detail}  
                path='/gif/:id' />
              <Route 
                component={() => <h1>404 ERROR :(</h1>}  
                path='/404' />
            </GifContextProvider>
          </Suspense>
        </section>
      </div>
    </HeadProvider>
  );
}

export default App;
