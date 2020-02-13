import { Record } from "immutable";

// Actions
import browserActions from "./actions";

const { MEDIA_QUERY_CHANGED } = browserActions;

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
