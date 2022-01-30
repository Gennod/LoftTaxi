export const ENABLE_ROUTES = () => ({ type: "ENABLE_ROUTES" });
export const GET_ROUTES = (fromValue, toValue, map) => ({
    type: "GET_ROUTES",
    fromValue,
    toValue,
    map
});
export const FETCH_ROUTES = (routes) => ({
    type: "FETCH_ROUTES",
    payload: routes
})