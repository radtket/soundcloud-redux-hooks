import { List, Record, Map } from "immutable";
import Cookies from "js-cookie";

import { COOKIE_PATH } from "../constants";

const FollowingList = new Record({
  currentPage: 0,
  hasNextPage: false,
  hasNextPageInStore: false,
  id: null,
  isNew: true,
  isPending: false,
  nextUrl: null,
  pageCount: 0,
  // trackIds: new List(),
  followingsIds: new List(),
  oauthToken: Cookies.get(COOKIE_PATH),
});

export default FollowingList;
