import React, { Suspense } from "react";
import "./App.css";
import { Link, Route } from "wouter";
import { HeadProvider } from "react-head";
import Logo from "components/Logo";
import Header from "components/Header";

import { GifContextProvider } from "contexts/GifsContext";
import { UserContextProvider } from "contexts/UserContext"
const Home = React.lazy(() => import("pages/Home"));
const SearchResults = React.lazy(() => import("pages/SearchResults"));
const Detail = React.lazy(() => import("pages/Detail"));
const Login = React.lazy(() => import("pages/Login"))
function App() {
  return (
    <HeadProvider>
      <div className="App">
        <UserContextProvider>
          <section className="App-content">
            <Header />
            <Link to="/">
              <Logo className="App-logo" />
            </Link>
            <Suspense fallback={null}>
              <GifContextProvider>
                <Route component={Home} path="/" />
                <Route
                  component={SearchResults}
                  path="/search/:keyword/:rating?"
                />
                <Route component={Detail} path="/gif/:id" />
                <Route component={Login} path="/login" />
                <Route component={() => <h1>404 ERROR :(</h1>} path="/404" />
              </GifContextProvider>
            </Suspense>
          </section>
        </UserContextProvider>
      </div>
    </HeadProvider>
  );
}

export default App;
