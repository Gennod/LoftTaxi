import { LOG_IN, LOG_OUT, AUTHENTICATE } from "../actions";

const initialState = {
    isLoggedIn: false,
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case LOG_IN: {
            return { isLoggedIn: true };
        }
        case LOG_OUT: {
            return { isLoggedIn: false };
        }
        case AUTHENTICATE: {
            return { isLoggedIn: true};
        }
        default:
            return state;
    }
}
