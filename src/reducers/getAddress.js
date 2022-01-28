const initialState = {
    addresses: null
};

export default function getAddress(state = initialState, action) {
    switch (action.type) {
        case "FETCH_ADDRESS": {
            return {
                ...state,
                addresses: action.payload,
            };
        }
        case "LOG_OUT": {
            return {
                ...state,
                addresses: null
            };
        }
        default:
            return state;
    }
}