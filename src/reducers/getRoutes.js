import { LOG_OUT, ENABLE_ROUTES, FETCH_ROUTES } from "../utils/constants";

const initialState = {
    isCardConnected: false,
    routes: null,
};

export default function getRoutes(state = initialState, action) {
    switch (action.type) {
        case ENABLE_ROUTES: {
            return {
                ...state,
                isCardConnected: true
            }
        }
        case FETCH_ROUTES: {
            return {
                ...state,
                routes: action.payload,
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                isCardConnected: false,
                routes: null
            };
        }
        
        default:
            return state;
    }
}