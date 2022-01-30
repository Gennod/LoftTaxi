import axios from "axios";

function getReg(email, password, name, surname) {
    let result = axios.post(`https://loft-taxi.glitch.me/register`, {
        email,
        password,
        name,
        surname,
    });

    return result;
}

export default getReg;