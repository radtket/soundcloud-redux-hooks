import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import searchActions from "../../store/search/actions";

// Components
import TrackGrid from "../components/TrackGrid";

const SearchPage = () => {
  const dispatch = useDispatch();
  const { query } = useSelector(({ router }) => {
    return {
      query: new URLSearchParams(router.location.search).get("q"),
    };
  });

  useEffect(() => {
    dispatch(searchActions.loadSearchResults(query));
  }, [dispatch, query]);

  return (
    <section className="container">
      <h1>SearchPage</h1>
      <TrackGrid />
    </section>
  );
};

export default SearchPage;
