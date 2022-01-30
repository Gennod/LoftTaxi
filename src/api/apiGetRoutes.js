import axios from "axios";

function getRoutes(fromValue, toValue) {
    let result = axios.get(
        `https://loft-taxi.glitch.me/route?address1=${fromValue}&address2=${toValue}`
    );

    return result;
}

export default getRoutes;