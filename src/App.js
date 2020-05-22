import React from 'react';
import './App.css';
import {Link, Route} from 'wouter'
import StaticContext from 'contexts/StaticContext'
import Home from 'pages/Home'
import SearchResults from 'pages/SearchResults';
import Detail from 'pages/Detail'
import Logo from 'components/Logo'
import {GifContextProvider} from 'contexts/GifsContext'

function App() {
  
  return (
    <StaticContext.Provider value={{name: 'is-provider'}}>
      <div className="App">
        <section className="App-content">
          <Link to='/'>
            <Logo className='App-logo'/>
          </Link>
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
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
