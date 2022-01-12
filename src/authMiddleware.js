import { serverLogin } from "./api";
import { AUTHENTICATE, authenticate } from "./actions";

export const authMiddleware = (store) => (next) => async (action) => {
    if (action.type === AUTHENTICATE) {
        const { email, password } = action.payload;

        const success = await serverLogin(email, password);
        
        if (success) {
            store.dispatch(authenticate());
            console.log(store.getState());
        } else {
            next(action);
        }
    }
}