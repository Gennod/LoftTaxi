import { LOG_OUT, REG } from "../utils/constants";

const initialState = {
    isLoggedIn: false,
    isLoaded: false,
};

export default function getReg(state = initialState, action) {
    switch (action.type) {
        case REG: {
            return {
                ...state,
                isLoggedIn: true,
                isLoaded: true,
            };
        }
        case LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                isLoaded: false,
            };
        }
        default:
            return state;
    }
}
