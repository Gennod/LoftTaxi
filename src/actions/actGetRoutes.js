import { ENABLE_ROUTES, GET_ROUTES, FETCH_ROUTES } from "../utils/constants";

export const enableRoutes = () => ({ type: ENABLE_ROUTES });
export const getRoutes = (fromValue, toValue, map) => ({ 
    type: GET_ROUTES,
    fromValue,
    toValue,
    map
});
export const fetchRoutes = (routes) => ({
    type: FETCH_ROUTES,
    payload: routes
})