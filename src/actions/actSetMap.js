import { SET_MAP } from "../utils/constants";

export const setMap = (isLoaded) => ({
    type: SET_MAP,
    isLoaded
});