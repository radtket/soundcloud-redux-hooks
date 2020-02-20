import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

//* Reducers
import browser from "./browser/reducer";
import followings from "./followings/followings-reducer";
import player from "./player/player-reducer";
import playerTimes from "./player/player-times-reducer";
import search from "./search/reducer";
import session from "./session/reducer";
import tracklists from "./tracklists/tracklists-reducer";
import tracks from "./tracks/reducer";
import users from "./users/reducer";

const createRootReducer = hist =>
  combineReducers({
    browser,
    player,
    playerTimes,
    router: connectRouter(hist),
    search,
    session,
    tracklists,
    tracks,
    users,
    followings,
  });

export default createRootReducer;
