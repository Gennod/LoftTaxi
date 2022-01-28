export const ENABLE_ROUTES = () => ({ type: "ENABLE_ROUTES" });
export const GET_ROUTES = (fromValue, toValue) => ({
    type: "GET_ROUTES",
    fromValue,
    toValue,
});
export const FETCH_ROUTES = (routes) => ({
    type: "FETCH_ROUTES",
    payload: routes
})