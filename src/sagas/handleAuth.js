import { takeEvery, call, put } from "redux-saga/effects";
import getAuth from "../api/apiGetAuth";

import { LOG_IN } from "../utils/constants";

import { fetchLogIN, fetchLogInFail } from "../actions/actLogIn";

export default function* handleAuth() {
    yield takeEvery(LOG_IN, function* ({ email, password, navigate }) {
        const result = yield call(getAuth, email, password);

        console.log(result);

        if (result.data.success) {
            navigate("/map");
            yield put(fetchLogIN());
        } else {
            yield put(fetchLogInFail());
        }
    });
}

