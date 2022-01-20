import { serverLogin } from "./api";
import { AUTHENTICATE, actLogIn } from "./reducers/auth";

export const authMiddleware = (store) => (next) => async (action) => {
    if (action.type === AUTHENTICATE) {
        const { email, password } = action.payload;

        const success = await serverLogin(email, password);

        if (success) {
            store.dispatch(actLogIn());
            console.log(store.getState());
        }
    } else {
        next(action);
    }
};
