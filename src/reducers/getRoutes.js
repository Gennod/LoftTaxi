const ENABLE_ROUTES = "ENABLE_ROUTES";
const FETCH_ROUTES = "FETCH_ROUTES";
const LOG_OUT = "LOG_OUT";

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