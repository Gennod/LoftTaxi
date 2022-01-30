import { takeEvery, call, put } from "redux-saga/effects";
import getAuth from "../api/apiGetAuth";

import { FETCH_LOG_IN } from "../actions/actLogIn";

export default function* handleAuth() {
    yield takeEvery("LOG_IN", function* ({ email, password, navigate }) {
        const result = yield call(getAuth, email, password);


        if (result.data.success) {
            navigate("/map");
            yield put(FETCH_LOG_IN());
        }
    });
}

