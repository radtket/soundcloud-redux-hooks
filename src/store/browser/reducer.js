import { Record } from "immutable";

// Actions
import { MEDIA_QUERY_CHANGED } from "./actions";

const BrowserState = new Record({
  media: {},
});

export default (state = new BrowserState(), { results, type }) => {
  switch (type) {
    case MEDIA_QUERY_CHANGED:
      return state.set("media", results);

    default:
      return state;
  }
};
