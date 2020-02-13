/* eslint-disable camelcase */
import { List } from "immutable";
import { TRACKS_PER_PAGE } from "../constants";
import Tracklist from "./tracklist";

// Actions
import searchActions from "../search/actions";
import { userActions } from "../users/actions";
import { tracklistActions } from "./actions";

const { LOAD_SEARCH_RESULTS } = searchActions;
const { LOAD_USER_LIKES, LOAD_USER_TRACKS } = userActions;
const {
  FETCH_TRACKS_FULFILLED,
  FETCH_TRACKS_PENDING,
  LOAD_FEATURED_TRACKS,
  UPDATE_PAGINATION,
} = tracklistActions;

const mergeTrackIds = ({ trackIds, collection }) => {
  const ids = trackIds.toJS();
  const newIds = collection.reduce((list, { id }) => {
    if (ids.indexOf(id) === -1) {
      list.push(id);
    }
    return list;
  }, []);

  return newIds.length ? new List(ids.concat(newIds)) : trackIds;
};

const updatePagination = ({ tracklist, page }) => {
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

export default (
  state = new Tracklist(),
  { collection, next_href, tracklistId, page, type }
) => {
  switch (type) {
    case FETCH_TRACKS_FULFILLED:
      return state.withMutations(tracklist => {
        tracklist
          .merge({
            isNew: false,
            isPending: false,
            nextUrl: next_href || null,
            trackIds: mergeTrackIds({
              trackIds: tracklist.trackIds,
              collection,
            }),
          })
          .merge(
            updatePagination({
              tracklist,
              page: tracklist.currentPage + 1,
            })
          );
      });

    case FETCH_TRACKS_PENDING:
      return state.set("isPending", true);

    case LOAD_FEATURED_TRACKS:
    case LOAD_SEARCH_RESULTS:
    case LOAD_USER_LIKES:
    case LOAD_USER_TRACKS:
      return state.isNew
        ? state.set("id", tracklistId)
        : state.merge(updatePagination({ tracklist: state, page: 1 }));

    case UPDATE_PAGINATION:
      return state.merge(updatePagination({ tracklist: state, page }));

    default:
      return state;
  }
};
