import { CHANGE_CLASS } from "../utils/constants";

export const changeClass = (clazz) => ({
    type: CHANGE_CLASS,
    clazz
});