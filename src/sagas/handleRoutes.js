import { takeEvery, call, put } from "redux-saga/effects";
import getRoutes from "../api/apiGetRoutes";
import { drawRoute } from "../drawRoute";

import { GET_ROUTES } from "../utils/constants";

import { fetchRoutes } from "../actions/actGetRoutes";

export default function* handleRoutes() {
    yield takeEvery(GET_ROUTES, function* ({ fromValue, toValue, map }) {
        try {
            const result = yield call(getRoutes, fromValue, toValue);

            if (result.data) {
                yield put(fetchRoutes(result.data));
                drawRoute(map, result.data);
            }
        } catch (error) {
            console.error(error);
        }
    });
}