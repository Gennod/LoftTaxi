import { takeEvery, call, put } from "redux-saga/effects";
import getCard from "../api/apiGetCard";

import { FETCH_CARD } from "../actions/actGetCard";

export default function* handleCard() {
    yield takeEvery("GET_CARD", function* ({ number, name, expiry, cvc }) {
        try {
            const result = yield call(getCard, number, name, expiry, cvc);

            if (result.data.success) {
                yield put(FETCH_CARD());
            }
        } catch (error) {
            console.error(error);
        }
    });
}