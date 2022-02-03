import { FETCH_LOG_IN, FETCH_LOG_IN_FAIL, LOG_OUT } from "../utils/constants";

const initialState = {
    isLoggedIn:
        localStorage.getItem("isLoggedIn") === "false"
            ? false
            : localStorage.getItem("isLoggedIn") &&
              localStorage.getItem("isLoggedIn") === "true"
            ? true
            : false,
    isLoggedInFailed: false,
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case FETCH_LOG_IN: {
            localStorage.setItem("isLoggedIn", true);
            return {
                ...state,
                isLoggedIn: true,
                isLoggedInFailed: false
            };
        }
        case FETCH_LOG_IN_FAIL: {
            return {
                ...state,
                isLoggedInFailed: true
            }
        }
        case LOG_OUT: {
            localStorage.setItem("isLoggedIn", false);
            return {
                ...state,
                isLoggedIn: false,
            };
        }
        default:
            return state;
    }
}
