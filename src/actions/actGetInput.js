import { GET_INPUT } from "../utils/constants";

export const getInput = (email, password) => ({
    type: GET_INPUT,
    payload: {
        email,
        password,
    },
});