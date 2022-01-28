export const FETCH_CARD = () => ({ type: "FETCH_CARD" });
export const GET_CARD = (number, name, expiry, cvc) => ({
    type: "GET_CARD",
    number,
    name,
    expiry,
    cvc,
});