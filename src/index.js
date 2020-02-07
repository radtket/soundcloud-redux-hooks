import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

//* Store
import history from "./store/history";
import configureStore from "./store";
import appActions, { media } from "./store/app/actions";

import App from "./views/App";

// Styles
import GlobalStyles from "./views/styles/GlobalStyles";
import * as serviceWorker from "./serviceWorker";

const store = configureStore();

ReactDOM.render(
  <Provider {...{ store }}>
    <ConnectedRouter {...{ history }}>
      <GlobalStyles />
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

store.dispatch(
  appActions.initApp({
    media,
  })
);

serviceWorker.unregister();
