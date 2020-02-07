import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

//* Reducers
import browser from "./browser/reducer";
import tracklists from "./tracklists/tracklists-reducer";
import tracks from "./tracks/reducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    browser,
    tracklists,
    tracks,
  });

export default createRootReducer;
