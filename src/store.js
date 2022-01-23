import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import {
    handleAdressList,
    handleAuth,
    handleReg,
    handleCard,
    handleRoutes,
} from "./sagas";

const initalState = {};
const middleware = [thunk];

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    initalState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(handleAdressList);
sagaMiddleware.run(handleAuth);
sagaMiddleware.run(handleReg);
sagaMiddleware.run(handleCard);
sagaMiddleware.run(handleRoutes);

export default store;
