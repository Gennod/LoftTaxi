const initialState = {
    isCardConnected: localStorage.getItem("isCardConnected") === "false" ? false : true,
};

export default function getCard(state = initialState, action) {
    switch (action.type) {
        case "FETCH_CARD": {
            localStorage.setItem("isCardConnected", true);
            return {
                ...state,
                isCardConnected: true,
            };
        }
        case "LOG_OUT": {
            localStorage.setItem("isCardConnected", false);
            return {
                ...state,
                isCardConnected: false,
            };
        }
        default:
            return state;
    }
}