const FETCH_LOG_IN = "FETCH_LOG_IN";
const LOG_OUT = "LOG_OUT";

const initialState = {
    isLoggedIn:
        localStorage.getItem("isLoggedIn") === "false"
            ? false
            : localStorage.getItem("isLoggedIn") &&
              localStorage.getItem("isLoggedIn") === "true"
            ? true
            : false,
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case FETCH_LOG_IN: {
            localStorage.setItem("isLoggedIn", true);
            return {
                ...state,
                isLoggedIn: true,
            };
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
