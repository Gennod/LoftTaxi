const GET_INPUT = "GET_INPUT";
const LOG_OUT = "LOG_OUT";

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