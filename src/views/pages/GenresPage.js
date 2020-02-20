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
    dispatch(loadSearchResults(id));
  }, [dispatch, id]);

  return (
    <div style={{ marginTop: "100px" }}>
      <GenreNav {...{ genre: id }} />
      <h1>Genres</h1>
      <section className="container">
        <TrackGrid />
      </section>
    </div>
  );
};

export default GenresPage;
