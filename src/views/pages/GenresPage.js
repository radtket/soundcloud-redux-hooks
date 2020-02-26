import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import TrackGrid from "../components/TrackGrid";
import GenreNav from "../components/GenreNav";
import PageTitle from "../components/PageTitle";
import { loadSearchResults } from "../../store/search/actions";
import backgroundImage from "../../assets/images/background-4.jpg";

const GenresPage = () => {
  const { id = "house" } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSearchResults({ query: id, tracklistId: "genre" }));
  }, [dispatch, id]);

  return (
    <div>
      <PageTitle activePage="Genres" {...{ backgroundImage }} />
      <GenreNav {...{ genre: id }} />
      <section className="container">
        <TrackGrid compactLayout />
      </section>
    </div>
  );
};

export default GenresPage;
