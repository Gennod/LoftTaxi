import { LOG_OUT, FETCH_CARD } from "../utils/constants";

const initialState = {
    isCardConnected:
        localStorage.getItem("isCardConnected") === "false"
            ? false
            : localStorage.getItem("isCardConnected")
            ? true
            : false,
    isLoaded: false,
};

export default function getCard(state = initialState, action) {
    switch (action.type) {
        case FETCH_CARD: {
            localStorage.setItem("isCardConnected", true);
            return {
                ...state,
                isCardConnected: true,
                isLoaded: true,
            };
        }
        case LOG_OUT: {
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
