import { takeEvery, call, put } from "redux-saga/effects";
import getRoutes from "../api/apiGetRoutes";
import { drawRoute } from "../drawRoute";

import { FETCH_ROUTES } from "../actions/actGetRoutes";

export default function* handleRoutes() {
    yield takeEvery("GET_ROUTES", function* ({ fromValue, toValue, map }) {
        try {
            const result = yield call(getRoutes, fromValue, toValue);

            if (result.data) {
                yield put(FETCH_ROUTES(result.data));
                drawRoute(map, result.data);
            }
        } catch (error) {
            console.error(error);
        }
    });
}