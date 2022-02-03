import { takeEvery, call, put } from "redux-saga/effects";
import getReg from "../api/apiGetReg";

import { REG } from "../utils/constants";

import { fetchLogIN } from "../actions/actLogIn";

export default function* handleReg() {
    yield takeEvery(
        REG,
        function* ({ email, password, name, surname, navigate }) {
            const result = yield call(getReg, email, password, name, surname);

            console.log(result);

            if (result.data.success) {
                navigate("/map");
                yield put(fetchLogIN());
            } 
        }
    );
}