import axios from "axios";

const instance = axios.create({
    baseURL: 'https://loft-taxi.glitch.me',
    headers: {
        "Content-Type": "application/json"
    }
});

function makeRequest({ method = "get", url, payload, params = null }) {
    return instance[method](url, { params, ...payload });
}

export default makeRequest;