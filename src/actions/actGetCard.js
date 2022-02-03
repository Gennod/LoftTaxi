import { FETCH_CARD, GET_CARD } from "../utils/constants";

export const fetchCard = () => ({ type: FETCH_CARD });
export const getCard = (number, name, expiry, cvc) => ({
    type: GET_CARD,
    number,
    name,
    expiry,
    cvc,
});