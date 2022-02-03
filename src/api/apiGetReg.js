import makeRequest from "./apiConfig";

function getReg(email, password, name, surname) {
    return makeRequest({
        method: "post",
        url: "/register",
        payload: {
            email,
            password,
            name,
            surname
        }
    })
}

export default getReg;