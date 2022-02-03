import makeRequest from "./apiConfig";

function getAddress() {
    return makeRequest({
        method: "get",
        url: "/addressList"
    })
}

export default getAddress;