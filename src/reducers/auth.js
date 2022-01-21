import {
    LOG_IN,
    LOG_OUT,
    REG,
    GET_INPUT
} from "../types";

const initialState = {
    isLoggedIn: false,
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case LOG_IN: {
            return {
                isLoggedIn: true
            };
        }
        case LOG_OUT: {
            return {
                isLoggedIn: false
            };
        }
        case REG: {
            return {
                isLoggedIn: true
            };
        }
        case GET_INPUT:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password
            };
        default:
            return state;
    }
}