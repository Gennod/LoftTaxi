import makeRequest from "./apiConfig";

const getAuth = (email, password) => {
    return makeRequest({
        method: "get",
        url: "/auth",
        params: { username: email, password }
    })
};

export default getAuth;