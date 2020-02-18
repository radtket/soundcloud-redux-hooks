import { List } from "immutable";
import { FOLLOWINGS_PER_PAGE } from "../constants";
import FollowingList from "./following-list";
import {
  FETCH_FOLLOWINGS_FULFILLED,
  FETCH_FOLLOWINGS_PENDING,
  UPDATE_FOLLOWINGS_PAGINATION,
  LOAD_USER_FOLLOWINGS,
} from "./actions";
import { isArrayEmpty } from "../../utils/helpers";

const mergeTrackIds = ({ followingsIds, collection }) => {
  const ids = followingsIds.toJS();
  const newIds = collection.reduce((list, { id }) => {
    if (ids.indexOf(id) === -1) {
      list.push(id);
    }
    return list;
  }, []);

  return isArrayEmpty(newIds) ? followingsIds : new List(ids.concat(newIds));
};

const updateTracksPagination = ({ followingsList, page }) => {
  const pageCount = Math.ceil(
    followingsList.followingsIds.size / FOLLOWINGS_PER_PAGE
  );
  const currentPage = Math.min(page, pageCount);
  const hasNextPageInStore = currentPage < pageCount;
  const hasNextPage = hasNextPageInStore || followingsList.nextUrl !== null;

  return {
    currentPage,
    hasNextPage,
    hasNextPageInStore,
    pageCount,
  };
};

export default (
  state = new FollowingList(),
  { collection, nextHref, followingsListId, page, type }
) => {
  switch (type) {
    case FETCH_FOLLOWINGS_FULFILLED:
      return state.withMutations(followingsList => {
        followingsList
          .merge({
            isNew: false,
            isPending: false,
            nextUrl: nextHref || null,
            followingsIds: mergeTrackIds({
              followingsIds: followingsList.followingsIds,
              collection,
            }),
          })
          .merge(
            updateTracksPagination({
              followingsList,
              page: followingsList.currentPage + 1,
            })
          );
      });

    case FETCH_FOLLOWINGS_PENDING:
      return state.set("isPending", true);

    case LOAD_USER_FOLLOWINGS:
      return state.isNew
        ? state.set("id", followingsListId)
        : state.merge(
            updateTracksPagination({ followingsList: state, page: 1 })
          );

    case UPDATE_FOLLOWINGS_PAGINATION:
      return state.merge(
        updateTracksPagination({ followingsList: state, page })
      );

    default:
      return state;
  }
};
