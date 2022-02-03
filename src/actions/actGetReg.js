import { REG, FETCH_REG } from "../utils/constants";

export const fetchReg = () => ({ type: FETCH_REG });
export const reg = (email, password, name, surname, navigate) => ({
    type: REG,
    email,
    password,
    name,
    surname,
    navigate,
});