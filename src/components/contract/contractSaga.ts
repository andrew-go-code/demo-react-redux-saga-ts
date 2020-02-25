import {takeEvery, put, all, call} from 'redux-saga/effects'

import {
    DELETE_CONTRACT,
    DeleteContractActionType,
    READ_ALL_CONTRACTS, READ_CONTRACTORS, SAVE_CONTRACT,
    SaveContractActionType, SHOW_CONTRACTORS,
    SHOW_CONTRACTS
} from "./contractActionTypes";
import {ContractType} from "./ContractTypes";
import {getContractorsFunc} from "../contractor/ContactorSaga";
import {DATA_SERVICE_URL, HEADERS} from "../../util/dataServiceData";
import {getErrorAction} from "../error/errorUtil";

const DEST_CATALOG = "/contracts";
const ERROR_MESSAGE = "Error happened during the operation with contract.";

function* saveContract(action: SaveContractActionType) {
    const response = yield call(saveContractFunc, action.item);
    if (response.status !== 200) {
        yield put(getErrorAction(ERROR_MESSAGE));
    } else {
        yield getContracts();
    }
}

function* getContracts() {
    const response = yield call(getContractsFunc);
    const responseJson = yield response.json();
    if (response.status !== 200) {
        yield put(getErrorAction(ERROR_MESSAGE));
    } else {
        yield put({
            type: SHOW_CONTRACTS,
            items: responseJson
        })
    }
}

function* deleteContract(action: DeleteContractActionType) {
    const response = yield call(deleteContractFunc, action.id);
    if (response.status !== 200) {
        yield put(getErrorAction(ERROR_MESSAGE));
    } else {
        yield getContracts();
    }
}

function* getContractors() {
    const response = yield call(getContractorsFunc);
    const responseJson = yield response.json();
    if (response.status !== 200) {
        yield put(getErrorAction(ERROR_MESSAGE));
    } else {
        yield put({
            type: SHOW_CONTRACTORS,
            contractors: responseJson
        })
    }
}

const saveContractFunc = (item: ContractType) => {
    return fetch(DATA_SERVICE_URL + DEST_CATALOG, {
        method: "POST",
        body: JSON.stringify(item),
        headers: HEADERS
    });
};

const getContractsFunc = () => {
    return fetch(DATA_SERVICE_URL + DEST_CATALOG);
};

const deleteContractFunc = (id: number) => {
    return fetch(DATA_SERVICE_URL + DEST_CATALOG, {
        method: "DELETE",
        body: JSON.stringify({
                id: id
            }
        ),
        headers: HEADERS
    })
};


export function* watchAllContract() {
    yield all([
        takeEvery(READ_ALL_CONTRACTS, getContracts),
        takeEvery(DELETE_CONTRACT, deleteContract),
        takeEvery(SAVE_CONTRACT, saveContract),
        takeEvery(READ_CONTRACTORS, getContractors)
    ]);
}