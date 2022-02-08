import {
    LOG_OUT,
    SET_MAP,
    CHANGE_CLASS
} from "../utils/constants";

const initialState = {
    isMapLoaded: false
};

export default function setMap(state = initialState, action) {
    switch (action.type) {
        case SET_MAP: {
            if (action.isLoaded) {
                return {
                    ...state,
                    isMapLoaded: true
                }
            } else {
                return {
                    ...state,
                    isMapLoaded: false
                }
            }
        }
        case CHANGE_CLASS: {
            return {
                ...state,
                isMapLoaded: false
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                isMapLoaded: false
            };
        }
        default:
            return state;
    }
}