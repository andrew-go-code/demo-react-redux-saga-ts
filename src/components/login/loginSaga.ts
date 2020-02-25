import { takeEvery, all, call, put } from 'redux-saga/effects'
import {LOGIN_FAIL, TRY_LOGIN, TryLoginActionType} from "./loginActionTypes";
import {AuthType} from "./LoginTypes";
import {DATA_SERVICE_URL, HEADERS} from "../../util/dataServiceData";

const URL = DATA_SERVICE_URL + "/auth";

function* login(action: TryLoginActionType) {
    const response = yield call(loginFunc, action.auth);
    if (response.ok){
        const responseJson = yield response.json();
        localStorage.setItem("user", JSON.stringify(responseJson));
        action.onSuccess();
    } else {
        yield put({
            type: LOGIN_FAIL
        });
        localStorage.removeItem("user");
    }
}

const loginFunc = (auth: AuthType) => {
    return fetch(URL, {
        method: "POST",
        body: JSON.stringify(auth),
        headers: HEADERS
    });
};

export function* watchLogin() {
    yield all([
        takeEvery(TRY_LOGIN, login)
    ]);
}