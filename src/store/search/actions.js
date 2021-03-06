export const LOAD_SEARCH_RESULTS = "LOAD_SEARCH_RESULTS";
export const NAVIGATE_TO_SEARCH = "NAVIGATE_TO_SEARCH";

export const loadSearchResults = ({ query, tracklistId }) => {
  return {
    type: LOAD_SEARCH_RESULTS,
    query,
    tracklistId: `${tracklistId}/${query
      .trim()
      .split(/\s+/)
      .join(" ")}`.toLowerCase(),
  };
};

export const navigateToSearch = query => ({
  type: NAVIGATE_TO_SEARCH,
  pathname: `/search`,
  search: `?q=${query}`,
});
