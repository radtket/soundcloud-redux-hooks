import { Record } from "immutable";

// Actions
import { LOAD_SEARCH_RESULTS } from "./actions";

const SearchState = new Record({
  query: null,
});

export default (state = new SearchState(), { type, query }) => {
  switch (type) {
    case LOAD_SEARCH_RESULTS:
      return state.merge({
        query,
      });

    default:
      return state;
  }
};
