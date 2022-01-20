import { LOG_IN, ERROR } from "../types";

import axios from "axios";

export const getAuth = (email, password, path) => async (dispatch) => {
    try {
        const res = await axios.get(
            `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
        );
        if (res.data.success) {
            dispatch({ type: LOG_IN });
            path("/map");
        }
    } catch(e) {
        dispatch({ type: ERROR, payload: console.log(e) });
    }
};
