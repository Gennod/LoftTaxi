import { LOG_OUT, REG, GET_INPUT } from "../actions";

const initialState = {
    isLoggedIn: false,
    isCardConnected: false,
    activeLink: "map"
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case "FETCH_LOG_IN": {
            return {
                ...state,
                isLoggedIn: true,
            };
        }
        case "CHANGE_CLASS": {
            return {
                ...state,
                activeLink: action.clazz
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                isCardConnected: false,
                email: "",
                password: "",
                addresses: null,
                routes: null,
                activeLink: "map"
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
