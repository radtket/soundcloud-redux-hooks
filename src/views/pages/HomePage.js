import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TrackGrid from "../components/TrackGrid";
import Hero from "../components/Hero";
import { API_USERS_URL, FEATURED_TRACKLIST_ID } from "../../store/constants";
import { loadUserTracks } from "../../store/users/actions";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      loadUserTracks({
        id: FEATURED_TRACKLIST_ID,
        url: `${API_USERS_URL}/${FEATURED_TRACKLIST_ID}`,
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
