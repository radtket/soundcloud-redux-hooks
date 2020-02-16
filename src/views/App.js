import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initAuth } from "../store/session/actions";

// Pages
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import UserPage from "./pages/UserPage";
import Callback from "./pages/Callback";

// Components
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import Genres from "./pages/Genres";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    initAuth(dispatch);
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <main className="main">
        <Route component={HomePage} exact path="/" />
        <Route component={Genres} path={["/genres/:id", "/genres"]} />
        <Route component={SearchPage} path="/search" />
        <Route component={UserPage} path="/users/:id/:resource" />
        <Route path="/callback">
          <Callback />
        </Route>
      </main>
      <Player />
    </>
  );
};

export default App;
