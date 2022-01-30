import { takeEvery, call, put } from "redux-saga/effects";
import getAuth from "../api/apiGetAuth";

import { FETCH_LOG_IN, FETCH_LOG_IN_FAIL } from "../actions/actLogIn";

export default function* handleAuth() {
    yield takeEvery("LOG_IN", function* ({ email, password, navigate }) {
        const result = yield call(getAuth, email, password);

        console.log(result.data);

        if (result.data.success) {
            navigate("/map");
            yield put(FETCH_LOG_IN());
        } else {
            yield put(FETCH_LOG_IN_FAIL());
        }
    });
}

