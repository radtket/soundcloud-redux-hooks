import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import TrackGrid from "../components/TrackGrid";

// Actions
import searchActions from "../../store/search/actions";

const { loadSearchResults } = searchActions;

const SearchPage = () => {
  const dispatch = useDispatch();
  const { query } = useSelector(({ router }) => {
    return {
      query: new URLSearchParams(router.location.search).get("q"),
    };
  });

  useEffect(() => {
    dispatch(loadSearchResults(query));
  }, [dispatch, query]);

  return (
    <section className="container">
      <h1>SearchPage</h1>
      <TrackGrid />
    </section>
  );
};

export default SearchPage;
