import { List } from "immutable";
import { TRACKS_PER_PAGE } from "../constants";
import searchActions from "../search/actions";
import { userActions } from "../users/actions";
import { tracklistActions } from "./actions";
import Tracklist from "./tracklist";

const mergeTrackIds = (trackIds, collection) => {
  const ids = trackIds.toJS();
  const newIds = collection.reduce((list, trackData) => {
    if (ids.indexOf(trackData.id) === -1) list.push(trackData.id);
    return list;
  }, []);

  return newIds.length ? new List(ids.concat(newIds)) : trackIds;
};

const updatePagination = (tracklist, page) => {
  const pageCount = Math.ceil(tracklist.trackIds.size / TRACKS_PER_PAGE);
  const currentPage = Math.min(page, pageCount);
  const hasNextPageInStore = currentPage < pageCount;
  const hasNextPage = hasNextPageInStore || tracklist.nextUrl !== null;

  return {
    currentPage,
    hasNextPage,
    hasNextPageInStore,
    pageCount,
  };
};

export default (state = new Tracklist(), { payload, type }) => {
  switch (type) {
    case tracklistActions.FETCH_TRACKS_FULFILLED:
      return state.withMutations(tracklist => {
        tracklist
          .merge({
            isNew: false,
            isPending: false,
            nextUrl: payload.next_href || null,
            trackIds: mergeTrackIds(tracklist.trackIds, payload.collection),
          })
          .merge(updatePagination(tracklist, tracklist.currentPage + 1));
      });

    case tracklistActions.FETCH_TRACKS_PENDING:
      return state.set("isPending", true);

    case tracklistActions.LOAD_FEATURED_TRACKS:
    case searchActions.LOAD_SEARCH_RESULTS:
    case userActions.LOAD_USER_LIKES:
    case userActions.LOAD_USER_TRACKS:
      return state.isNew
        ? state.set("id", payload.tracklistId)
        : state.merge(updatePagination(state, 1));

    case tracklistActions.UPDATE_PAGINATION:
      return state.merge(updatePagination(state, payload.page));

    default:
      return state;
  }
};
