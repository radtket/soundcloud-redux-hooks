import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TrackGrid from "../components/TrackGrid";
import Hero from "../components/Hero";
import { FEATURED_TRACKLIST_USER_ID } from "../../store/constants";
import { loadUserTracks } from "../../store/users/actions";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      loadUserTracks({
        id: FEATURED_TRACKLIST_USER_ID,
        resource: "favorites",
        url: `users/${FEATURED_TRACKLIST_USER_ID}/favorites`,
      })
    );
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
