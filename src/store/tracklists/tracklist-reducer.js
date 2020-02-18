import { List } from "immutable";
import { TRACKS_PER_PAGE } from "../constants";
import Tracklist from "./tracklist";

// Actions
import { LOAD_SEARCH_RESULTS } from "../search/actions";
import { LOAD_USER_TRACKS } from "../users/actions";
import {
  FETCH_TRACKS_FULFILLED,
  FETCH_TRACKS_PENDING,
  UPDATE_TRACKS_PAGINATION,
} from "./actions";
import { LOAD_GENRE_TRACKS } from "../genre/actions";
import { isArrayEmpty } from "../../utils/helpers";

const mergeTrackIds = ({ trackIds, collection }) => {
  const ids = trackIds.toJS();
  const newIds = collection.reduce((list, { id }) => {
    if (ids.indexOf(id) === -1) {
      list.push(id);
    }
    return list;
  }, []);

  return isArrayEmpty(newIds) ? trackIds : new List(ids.concat(newIds));
};

const updateTracksPagination = ({ tracklist, page }) => {
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
  { collection, nextHref, tracklistId, page, type }
) => {
  switch (type) {
    case FETCH_TRACKS_FULFILLED:
      return state.withMutations(tracklist => {
        tracklist
          .merge({
            isNew: false,
            isPending: false,
            nextUrl: nextHref || null,
            trackIds: mergeTrackIds({
              trackIds: tracklist.trackIds,
              collection,
            }),
          })
          .merge(
            updateTracksPagination({
              tracklist,
              page: tracklist.currentPage + 1,
            })
          );
      });

    case FETCH_TRACKS_PENDING:
      return state.set("isPending", true);
    case LOAD_GENRE_TRACKS:
    case LOAD_SEARCH_RESULTS:
    case LOAD_USER_TRACKS:
      return state.isNew
        ? state.set("id", tracklistId)
        : state.merge(updateTracksPagination({ tracklist: state, page: 1 }));

    case UPDATE_TRACKS_PAGINATION:
      return state.merge(updateTracksPagination({ tracklist: state, page }));

    default:
      return state;
  }
};
