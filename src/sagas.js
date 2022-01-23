import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_CARD, FETCH_ADDRESS, FETCH_LOG_IN, FETCH_ROUTES } from "./types";
import axios from "axios";

const getAuth = (email, password) => {
    const result = axios.get(
        `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
    );

    return result;
};

function getAddress() {
    const result = axios.get(`https://loft-taxi.glitch.me/addressList`);

    return result;
}

function getReg(email, password, name, surname) {
    let result = axios.post(`https://loft-taxi.glitch.me/register`, {
        email,
        password,
        name,
        surname,
    });

    return result;
}

function getCard(number, name, expiry, cvc) {
    let result = axios.post(`https://loft-taxi.glitch.me/card`, {
        number,
        name,
        expiry,
        cvc,
    });

    return result;
}

function getRoutes(fromValue, toValue) {
    let result = axios.get(
        `https://loft-taxi.glitch.me/route?address1=${fromValue}&address2=${toValue}`
    );

    return result;
}

export function* handleReg() {
    yield takeEvery(
        "REG",
        function* ({ email, password, name, surname, navigate }) {
            const result = yield call(getReg, email, password, name, surname);

            if (result.data.success) {
                navigate("/map");
                yield put(FETCH_LOG_IN());
            } else {
                console.log(result.data.error);
            }
        }
    );
}

export function* handleAuth() {
    yield takeEvery("LOG_IN", function* ({ email, password, navigate }) {
        const result = yield call(getAuth, email, password);

        if (result.data.success) {
            navigate("/map");
            yield put(FETCH_LOG_IN());
        }
    });
}

export function* handleAdressList() {
    yield takeEvery("GET_ADDRESS", function* () {
        try {
            const result = yield call(getAddress);

            yield put(FETCH_ADDRESS(result.data.addresses));
        } catch (error) {
            console.log(error);
        }
    });
}

export function* handleCard() {
    yield takeEvery("GET_CARD", function* ({ number, name, expiry, cvc }) {
        try {
            const result = yield call(getCard, number, name, expiry, cvc);

            if (result.data.success) {
                console.log(result);
                yield put(FETCH_CARD());
            }
        } catch (error) {
            console.log(error);
        }
    });
}

export function* handleRoutes() {
    yield takeEvery("GET_ROUTES", function* ({ fromValue, toValue }) {
        try {
            const result = yield call(getRoutes, fromValue, toValue);

            yield put(FETCH_ROUTES(result.data));
        } catch (error) {
            console.log(error);
        }
    });
}
