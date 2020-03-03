import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMeasure } from "react-use";
import { initAuth } from "../store/session/actions";

// Pages
import Callback from "./pages/Callback";
import GenresPage from "./pages/GenresPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import TrackPage from "./pages/TrackPage";
import UserPage from "./pages/UserPage";

// Session
import FollowingPage from "./pages/Session/FollowingPage";
import LikesPage from "./pages/Session/LikesPage";
import StreamPage from "./pages/Session/StreamPage";

// Components
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import HistorySidebar from "./components/HistorySidebar";

const App = () => {
  const dispatch = useDispatch();
  const [ref, { height: navbarHeight }] = useMeasure();

  useEffect(() => {
    initAuth(dispatch);
  }, [dispatch]);

  return (
    <>
      <Navbar {...{ ref, mobile }} />
      <main
        className="main"
        style={{
          paddingTop: navbarHeight,
        }}
      >
        <Route component={HomePage} exact path="/" />
        <Route component={GenresPage} path={["/genres/:id", "/genres"]} />
        <Route component={SearchPage} path="/search" />
        <Route component={UserPage} exact path="/users/:id/:resource" />
        <Route component={TrackPage} path="/users/:id/:resource/:trackId" />

        {/* Session */}
        <Route component={LikesPage} path="/me/likes" />
        <Route component={StreamPage} path="/me/stream" />
        <Route component={FollowingPage} path="/me/followings" />
        <Route component={Callback} path="/callback" />
      </main>
      <Player {...{ navbarHeight }} />
      <HistorySidebar />
    </>
  );
};

export default App;
