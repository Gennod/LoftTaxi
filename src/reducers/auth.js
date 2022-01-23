import { LOG_OUT, REG, GET_INPUT } from "../types";

const initialState = {
    isLoggedIn: false,
    isCardConnected: false,
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case "FETCH_LOG_IN": {
            return {
                ...state,
                isLoggedIn: true,
            };
        }
        case LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                isCardConnected: false,
                email: "",
                password: "",
                addresses: null,
                routes: null
            };
        }
        case REG: {
            return {
                ...state,
                isLoggedIn: true,
            };
        }
        case "FETCH_ADDRESS": {
            return {
                ...state,
                addresses: action.payload,
            };
        }
        case "FETCH_CARD": {
            return {
                ...state,
                isCardConnected: true,
            };
        }
        case GET_INPUT:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
            };
        case "ENABLE_ROUTES":
            return {
                ...state,
                isCardConnected: true
            }
        case "FETCH_ROUTES":
            return {
                ...state,
                routes: action.payload
            }
        default:
            return state;
    }
}
