import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  loadFeaturedTracks,
  loadGenreTracks,
} from "../../store/tracklists/actions";
import TrackGrid from "../components/TrackGrid";
import SongsNav from "../components/SongsNav";

const Genres = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGenreTracks(id));
  }, [dispatch, id]);

  return (
    <div style={{ marginTop: "100px" }}>
      <SongsNav {...{ genre: id }} />
      <h1>Genres</h1>
      <section className="container">
        <TrackGrid />
      </section>
    </div>
  );
};

export default Genres;
