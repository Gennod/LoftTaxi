import axios from "axios";

function getCard(number, name, expiry, cvc) {
    let result = axios.post(`https://loft-taxi.glitch.me/card`, {
        number,
        name,
        expiry,
        cvc,
    });

    return result;
}

export default getCard;
