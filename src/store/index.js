import { createStore, applyMiddleware, compose } from "redux";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import reducers from "../reducers";
import sagas from "../sagas";

const initialState = {};

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();
const reactNavigationReduxMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

const createStoreWithMiddleware = compose(
  applyMiddleware(
    sagaMiddleware,
    loggerMiddleware,
    reactNavigationReduxMiddleware
  )
)(createStore);

export const store = createStoreWithMiddleware(reducers, initialState);

sagaMiddleware.run(sagas);
