import { Record } from "immutable";

// Actions
import searchActions from "./actions";

const { LOAD_SEARCH_RESULTS, TOGGLE_SEARCH_FIELD } = searchActions;

const SearchState = new Record({
  currentQuery: null,
  open: false,
});

export default (state = new SearchState(), { type, query }) => {
  switch (type) {
    case LOAD_SEARCH_RESULTS:
      return state.merge({
        open: false,
        currentQuery: query,
      });

    case TOGGLE_SEARCH_FIELD:
      return state.set("open", !state.open);

    default:
      return state;
  }
};
