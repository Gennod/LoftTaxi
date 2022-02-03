import { takeEvery, call, put } from "redux-saga/effects";
import getCard from "../api/apiGetCard";

import { GET_CARD } from "../utils/constants";

import { fetchCard } from "../actions/actGetCard";

export default function* handleCard() {
    yield takeEvery(GET_CARD, function* ({ number, name, expiry, cvc }) {
        try {
            const result = yield call(getCard, number, name, expiry, cvc);

            if (result.data.success) {
                yield put(fetchCard());
            }
        } catch (error) {
            console.error(error);
        }
    });
}