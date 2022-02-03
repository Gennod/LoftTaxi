import { takeEvery, call, put } from "redux-saga/effects";
import getAddress from "../api/apiGetAddress";

import { GET_ADDRESS } from "../utils/constants";

import { fetchAddress } from "../actions/actGetAddress";

export default function* handleAdressList() {
    yield takeEvery(GET_ADDRESS, function* () {
        try {
            const result = yield call(getAddress);

            yield put(fetchAddress(result.data.addresses));
        } catch (error) {
            console.error(error);
        }
    });
}
