import { takeEvery, call, put } from "redux-saga/effects";
import getReg from "../api/apiGetReg";

import { FETCH_LOG_IN } from "../actions/actLogIn";

export default function* handleReg() {
    yield takeEvery(
        "REG",
        function* ({ email, password, name, surname, navigate }) {
            const result = yield call(getReg, email, password, name, surname);

            if (result.data.success) {
                navigate("/map");
                yield put(FETCH_LOG_IN());
            } 
        }
    );
}