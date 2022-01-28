import {
    combineReducers
} from "redux";
import authReducer from "./auth";
import changeClassReducer from "./changeClass";
import getCardReducer from "./getCard";
import getInputReducer from "./getInput";
import getRegReducer from "./getReg";
import getRoutesReducer from "./getRoutes";
import getAddressReducer from "./getAddress";

export default combineReducers({
    auth: authReducer,
    changeClass: changeClassReducer,
    getCard: getCardReducer,
    getInput: getInputReducer,
    getReg: getRegReducer,
    getRoutes: getRoutesReducer,
    getAddress: getAddressReducer
});