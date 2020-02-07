import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { routerMiddleware } from "connected-react-router";
import sagas from "./sagas";
import history from "./history";
import createRootReducer from "./reducers";

const configureStore = () => {
  const enhancers = [];
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware, logger, routerMiddleware(history)];

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-underscore-dangle
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension());
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  const store = createStore(createRootReducer(history), composedEnhancers);
  sagaMiddleware.run(sagas);

  return store;
};

export default configureStore;
