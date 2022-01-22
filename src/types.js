export const LOG_IN = (email, password, navigate) => ({
    type: "LOG_IN",
    email,
    password,
    navigate,
});
export const FETCH_LOG_IN = () => ({ type: "FETCH_LOG_IN" });
export const LOG_OUT = "LOG_OUT";
export const ERROR = "ERROR";
export const FETCH_CARD = () => ({type: "FETCH_CARD"});
export const GET_CARD = (number, name, expiry, cvc) => ({type: "GET_CARD", number, name, expiry, cvc});
export const FETCH_REG = () => ({type: "REG"});
export const REG = (email, password, name, surname, navigate) => ({
    type: "REG",
    email,
    password,
    name,
    surname,
    navigate
});
export const GET_INPUT = "GET_INPUT";
export const GET_ADDRESS = () => ({ type: "GET_ADDRESS" });
export const FETCH_ADDRESS = (addresses) => ({
    type: "FETCH_ADDRESS",
    payload: addresses,
});
