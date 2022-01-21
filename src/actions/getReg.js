import {
    REG,
    ERROR
} from "../types";

import axios from "axios";

export const getReg = (email, password, name, surname, path) => async (dispatch) => {
    try {
        const res = await axios.post(
            `https://loft-taxi.glitch.me/register`, {
                email,
                password,
                name,
                surname
            });
        console.log(res);
        if (res.data.success) {
            dispatch({
                type: REG
            });
            path("/map");
        }
    } catch (e) {
        dispatch({
            type: ERROR,
            payload: console.log(e)
        });
    }
};