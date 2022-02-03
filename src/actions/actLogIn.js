import { LOG_IN, FETCH_LOG_IN, FETCH_LOG_IN_FAIL } from "../utils/constants";

export const logIn = (email, password, navigate) => ({
    type: LOG_IN,
    email,
    password,
    navigate,
});
export const fetchLogIN = () => ({ type: FETCH_LOG_IN });
export const fetchLogInFail = () => ({type: FETCH_LOG_IN_FAIL})