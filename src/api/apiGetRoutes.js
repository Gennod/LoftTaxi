import makeRequest from "./apiConfig";

function getRoutes(fromValue, toValue) {
    return makeRequest({
        method: "get",
        url: "/route",
        params: { address1: fromValue, address2: toValue }
    })
}

export default getRoutes;