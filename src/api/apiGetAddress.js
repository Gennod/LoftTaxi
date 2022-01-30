import axios from "axios";

function getAddress() {
    const result = axios.get(`https://loft-taxi.glitch.me/addressList`);

    return result;
}

export default getAddress;