import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { tracklistActions } from "../../store/tracklists/actions";
import TrackGrid from "../components/TrackGrid";
import Hero from "../components/Hero";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tracklistActions.loadFeaturedTracks());
  }, [dispatch]);

  return (
    <>
      <Hero />
      <section className="container">
        <TrackGrid />
      </section>
    </>
  );
};

export default HomePage;
