import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initAuth } from "../store/session/actions";

// Pages
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import UserPage from "./pages/UserPage";
import GenresPage from "./pages/GenresPage";
import Callback from "./pages/Callback";

// Session
import LikesPage from "./pages/Session/LikesPage";
import StreamPage from "./pages/Session/StreamPage";

// Components
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import HistorySidebar from "./components/HistorySidebar";
import FollowingPage from "./pages/Session/FollowingPage";

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
        <Route component={GenresPage} path={["/genres/:id", "/genres"]} />
        <Route component={SearchPage} path="/search" />
        <Route component={UserPage} path="/users/:id/:resource" />

        {/* Session */}
        <Route component={LikesPage} path="/me/likes" />
        <Route component={StreamPage} path="/me/stream" />
        <Route component={FollowingPage} path="/me/followings" />
        <Route path="/callback">
          <Callback />
        </Route>
      </main>
      <Player />
      <HistorySidebar />
    </>
  );
};

export default App;
