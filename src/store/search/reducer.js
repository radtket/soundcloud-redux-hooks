import { Record } from "immutable";
import searchActions from "./actions";

const SearchState = new Record({
  currentQuery: null,
  open: false,
});

export default (state = new SearchState(), { payload, type }) => {
  switch (type) {
    case searchActions.LOAD_SEARCH_RESULTS:
      return state.merge({
        open: false,
        currentQuery: payload.query,
      });

    case searchActions.TOGGLE_SEARCH_FIELD:
      return state.set("open", !state.open);

    default:
      return state;
  }
};
