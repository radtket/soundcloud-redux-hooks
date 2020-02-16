import { Record } from "immutable";

// Actions
import { LOAD_SEARCH_RESULTS, TOGGLE_SEARCH_FIELD } from "./actions";

const SearchState = new Record({
  query: null,
  open: false,
});

export default (state = new SearchState(), { type, query }) => {
  switch (type) {
    case LOAD_SEARCH_RESULTS:
      return state.merge({
        open: false,
        query,
      });

    case TOGGLE_SEARCH_FIELD:
      return state.set("open", !state.open);

    default:
      return state;
  }
};
