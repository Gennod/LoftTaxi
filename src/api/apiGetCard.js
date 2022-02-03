import makeRequest from "./apiConfig";

function getCard(data) {
    return makeRequest({
        method: "post",
        url: '/card',
        data
    })
}

export default getCard;
