import { Platform } from "react-native";
import { createStore, applyMiddleware, compose } from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import devTools from "remote-redux-devtools";
import logger from "redux-logger";

import RootReducer from "./reducers";

const middleware = applyMiddleware(promise(), thunk, logger);

const Store = createStore(
  RootReducer,
  compose(
    middleware,
    devTools({
      name: Platform.OS,
      hostname: "localhost",
      port: 5678
    })
  )
);

export default Store;
