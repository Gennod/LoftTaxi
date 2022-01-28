const initialState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") === "false" ? false : true,
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case "FETCH_LOG_IN": {
            return {
                ...state,
                isLoggedIn: true,
            };
        }
        case "LOG_OUT": {
            localStorage.setItem("isLoggedIn", false);
            return {
                ...state,
                isLoggedIn: false
            };
        }
        default:
            return state;
    }
}