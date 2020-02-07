import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

//* Reducers
import browser from "./browser/reducer";
import tracklists from "./tracklists/tracklists-reducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    browser,
    tracklists,
  });

export default createRootReducer;
