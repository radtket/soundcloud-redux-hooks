import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

//* Reducers
import browser from "./browser/reducer";
import history from "./history/reducer";
import player from "./player/player-reducer";
import playerTimes from "./player/player-times-reducer";
import search from "./search/reducer";
import session from "./session/reducer";
import tracklists from "./tracklists/tracklists-reducer";
import tracks from "./tracks/reducer";
import users from "./users/reducer";
import followings from "./followings/followings-reducer";
import following from "./following/reducer";

const createRootReducer = hist =>
  combineReducers({
    browser,
    history,
    player,
    playerTimes,
    router: connectRouter(hist),
    search,
    session,
    tracklists,
    tracks,
    users,
    followings,
    following,
  });

export default createRootReducer;
