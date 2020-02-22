import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import TrackGrid from "../components/TrackGrid";
import GenreNav from "../components/GenreNav";
import { loadSearchResults } from "../../store/search/actions";

const GenresPage = () => {
  const { id = "house" } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSearchResults({ query: id, tracklistId: "genre" }));
  }, [dispatch, id]);

  return (
    <div>
      <GenreNav {...{ genre: id }} />
      <h1>Genres</h1>
      <section className="container">
        <TrackGrid />
      </section>
    </div>
  );
};

export default GenresPage;
