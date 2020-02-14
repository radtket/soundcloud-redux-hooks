export const LOAD_SEARCH_RESULTS = "LOAD_SEARCH_RESULTS";
export const NAVIGATE_TO_SEARCH = "NAVIGATE_TO_SEARCH";
export const TOGGLE_SEARCH_FIELD = "TOGGLE_SEARCH_FIELD";

export const loadSearchResults = query => {
  return {
    type: LOAD_SEARCH_RESULTS,
    query,
    tracklistId: `search/${query
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

export const toggleSearchField = () => ({
  type: TOGGLE_SEARCH_FIELD,
});
