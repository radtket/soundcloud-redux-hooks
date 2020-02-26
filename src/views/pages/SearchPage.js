import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import TrackGrid from "../components/TrackGrid";

// Actions
import { loadSearchResults } from "../../store/search/actions";

const SearchPage = () => {
  const dispatch = useDispatch();
  const query = useSelector(({ router }) =>
    new URLSearchParams(router.location.search).get("q")
  );

  useEffect(() => {
    dispatch(loadSearchResults({ query, tracklistId: "search" }));
  }, [dispatch, query]);

  return (
    <section className="container">
      <h1>SearchPage</h1>
      <TrackGrid compactLayout />
    </section>
  );
};

export default SearchPage;
