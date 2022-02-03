import { GET_ADDRESS, FETCH_ADDRESS } from "../utils/constants";

export const getAddress = () => ({ type: GET_ADDRESS });
export const fetchAddress = (addresses) => ({
    type: FETCH_ADDRESS,
    payload: addresses,
});