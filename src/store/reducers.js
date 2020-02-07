import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

//* Reducers
import browser from "./browser/reducer";
import search from "./search/reducer";
import tracklists from "./tracklists/tracklists-reducer";
import tracks from "./tracks/reducer";
import users from "./users/reducer";

const createRootReducer = history =>
  combineReducers({
    browser,
    router: connectRouter(history),
    search,
    tracklists,
    tracks,
    users,
  });

export default createRootReducer;
