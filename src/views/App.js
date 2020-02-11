import React from "react";
import { Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import UserPage from "./pages/UserPage";

// Components
import Player from "./components/Player";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="main">
        <Route component={HomePage} exact path="/" />
        <Route component={SearchPage} path="/search" />
        <Route component={UserPage} path="/users/:id/:resource" />
      </main>
      <Player />
    </>
  );
};

export default App;
