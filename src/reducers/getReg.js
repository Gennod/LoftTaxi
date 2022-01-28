const initialState = {
    isLoggedIn: false,
};

export default function getReg(state = initialState, action) {
    switch (action.type) {
        case "REG": {
            return {
                ...state,
                isLoggedIn: true,
            };
        }
        case "LOG_OUT": {
            return {
                ...state,
                isLoggedIn: false
            };
        }
        default:
            return state;
    }
}