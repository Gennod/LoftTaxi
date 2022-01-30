const REG = "REG";
const LOG_OUT = "LOG_OUT";

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
