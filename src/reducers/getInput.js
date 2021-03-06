import { LOG_OUT, GET_INPUT } from "../utils/constants";

const initialState = {
    email: "",
    password: ""
};

export default function getInput(state = initialState, action) {
    switch (action.type) {
        case GET_INPUT: {
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
            };
        }
        case LOG_OUT: {
            return {
                ...state,
                email: "",
                password: ""
            };
        }
        default:
            return state;
    }
}