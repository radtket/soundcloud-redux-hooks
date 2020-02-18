import Cookies from "js-cookie";
import { Map } from "immutable";
import { FEATURED_FOLLOWINGLIST_ID, COOKIE_PATH } from "../constants";
import FollowingList from "./following-list";
import followingReducer from "./following-reducer";
import {
  FETCH_FOLLOWINGS_FULFILLED,
  FETCH_FOLLOWINGS_PENDING,
  LOAD_USER_FOLLOWINGS,
  UPDATE_FOLLOWINGS_PAGINATION,
} from "./actions";

const initialState = new Map({
  currentFollowingsListId: FEATURED_FOLLOWINGLIST_ID,
  [FEATURED_FOLLOWINGLIST_ID]: new FollowingList({
    id: FEATURED_FOLLOWINGLIST_ID,
    isNew: true,
    oauthToken: Cookies.get(COOKIE_PATH),
  }),
});

export default (
  state = initialState,
  { page, type, followingsListId, collection, nextHref }
) => {
  switch (type) {
    case FETCH_FOLLOWINGS_FULFILLED:
    case FETCH_FOLLOWINGS_PENDING:
      return state.set(
        followingsListId,
        followingReducer(state.get(followingsListId), {
          collection,
          nextHref,
          followingsListId,
          type,
        })
      );

    case LOAD_USER_FOLLOWINGS:
      return state.merge({
        currentFollowingsListId: followingsListId,
        [followingsListId]: followingReducer(state.get(followingsListId), {
          followingsListId,
          type,
        }),
      });

    case UPDATE_FOLLOWINGS_PAGINATION:
      return state.set(
        state.get("currentFollowingsListId"),
        followingReducer(state.get(state.get("currentFollowingsListId")), {
          page,
          type,
        })
      );

    default:
      return state;
  }
};
