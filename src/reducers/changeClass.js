import { LOG_OUT, CHANGE_CLASS } from "../utils/constants";

const initialState = {
    activeLink: localStorage.getItem("activeLink")
        ? localStorage.getItem("activeLink")
        : "map",
};

export default function changeClass(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CLASS: {
            localStorage.setItem("activeLink", action.clazz);
            return {
                ...state,
                activeLink: action.clazz,
            };
        }
        case LOG_OUT: {
            localStorage.setItem("activeLink", "map");
            return {
                ...state,
                activeLink: "map",
            };
        }
        default:
            return state;
    }
}
