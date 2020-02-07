import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { tracklistActions } from "../../store/tracklists/actions";
import TrackGrid from "../components/TrackGrid";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tracklistActions.loadFeaturedTracks());
  }, [dispatch]);

  return (
    <section className="container">
      <h1>HomePage</h1>
      <TrackGrid />
    </section>
  );
};

export default HomePage;
