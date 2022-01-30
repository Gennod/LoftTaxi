import axios from "axios";

const getAuth = (email, password) => {
    const result = axios.get(
        `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
    );


    return result;
};

export default getAuth;