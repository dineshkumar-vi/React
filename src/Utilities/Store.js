import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import rootSaga from "../App/AppSagas";
import { rootReducer } from "../App/AppReducer";

// Create the saga middleware with empty arguments
const sagaMiddleware = createSagaMiddleware();


const composeEnhancers =
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware, logger)
  ));

sagaMiddleware.run(rootSaga);
