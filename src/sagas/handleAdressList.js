import { takeEvery, call, put } from "redux-saga/effects";
import getAddress from "../api/apiGetAddress";

import { FETCH_ADDRESS } from "../actions/actGetAddress";

export default function* handleAdressList() {
    yield takeEvery("GET_ADDRESS", function* () {
        try {
            const result = yield call(getAddress);

            yield put(FETCH_ADDRESS(result.data.addresses));
        } catch (error) {
            console.error(error);
        }
    });
}
