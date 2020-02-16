import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import TrackGrid from "../components/TrackGrid";
import SongsNav from "../components/SongsNav";
import { loadGenreTracks } from "../../store/genre/actions";

const GenresPage = () => {
  const { id } = useParams();
  const genre = id || "house";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGenreTracks(genre));
  }, [dispatch, genre]);

  return (
    <div style={{ marginTop: "100px" }}>
      <SongsNav {...{ genre }} />
      <h1>Genres</h1>
      <section className="container">
        <TrackGrid />
      </section>
    </div>
  );
};

export default GenresPage;
