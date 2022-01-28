export const LOG_IN = (email, password, navigate) => ({
    type: "LOG_IN",
    email,
    password,
    navigate,
});
export const FETCH_LOG_IN = () => ({ type: "FETCH_LOG_IN" });