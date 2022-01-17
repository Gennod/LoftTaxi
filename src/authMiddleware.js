import { serverLogin } from "./api";
import { store } from "./store";
import { AUTHENTICATE, logIn } from "./actions";

export const authMiddleware = (state) => (next) => async (action) => {
    if (action.type === AUTHENTICATE) {
        const { email, password } = action.payload;

        const success = await serverLogin(email, password);

        if (success) {
            store.dispatch(logIn());
            window.location.href = "/map/map";
            localStorage.setItem("isLoggedIn", true);
        } 
    } else {
        next(action);
    }
}   