import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

//* Reducers
import browser from "./browser/reducer";
import search from "./search/reducer";
import tracklists from "./tracklists/tracklists-reducer";
import tracks from "./tracks/reducer";

const createRootReducer = history =>
  combineReducers({
    browser,
    router: connectRouter(history),
    search,
    tracklists,
    tracks,
  });

export default createRootReducer;
