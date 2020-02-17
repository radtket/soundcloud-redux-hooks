import { List, Record } from "immutable";

const Tracklist = new Record({
  currentPage: 0,
  hasNextPage: false,
  hasNextPageInStore: false,
  id: null,
  isNew: true,
  isPending: false,
  nextUrl: null,
  pageCount: 0,
  trackIds: new List(),
  oauthToken: null,
});

export default Tracklist;
