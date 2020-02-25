import {takeEvery, put, all, call} from 'redux-saga/effects'
import {
    DELETE_CONTRACTOR,
    DeleteContractorAction,
    GET_CONTRACTORS, MODAL_CONTRACTOR, READ_ALL_CONTRACTORS, READ_CONTRACTOR,
    ReadAllContractorsAction, ReadContractorAction,
    SAVE_CONTRACTOR,
    SaveContractorAction
} from "./contractorActionTypes";
import {ContractorType} from "./ContractorTypes";
import {DATA_SERVICE_URL, HEADERS} from "../../util/dataServiceData";
import {getErrorAction} from "../error/errorUtil";

const DEST_CATALOG = "/contractors";
const ERROR_MESSAGE = "Error happened during the operation with contractor.";

function* getContractors() {
    const response = yield call(getContractorsFunc);
    const responseJson = yield response.json();
    if (response.status !== 200) {
        yield put(getErrorAction(ERROR_MESSAGE));
    } else {
        yield put({
            type: GET_CONTRACTORS,
            items: responseJson,
        })
    }
}

function* saveContractor(action: SaveContractorAction) {
    const response = yield call(saveContractorFunc, action.item);
    if (response.status !== 200) {
        yield put(getErrorAction(ERROR_MESSAGE));
    } else {
        yield getContractors();
    }
}

const deleteContractorFunc = (id: number) => {
    return fetch(DATA_SERVICE_URL + DEST_CATALOG, {
        method: 'DELETE',
        body: JSON.stringify({
            id: id
        }),
        headers: HEADERS,
    })
};

export const getContractorsFunc = () => {
    return fetch(DATA_SERVICE_URL + DEST_CATALOG, {
        method: 'GET',
    })
};

const saveContractorFunc = (item: ContractorType) => {
    return fetch(DATA_SERVICE_URL + DEST_CATALOG, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: HEADERS,
    })
};

function* readAllContractors(action: ReadAllContractorsAction) {
    const response = yield call(getContractorsFunc);
    const responseJson = yield response.json();
    if (response.status !== 200) {
        yield put(getErrorAction(ERROR_MESSAGE));
    } else {
        yield put({
            type: GET_CONTRACTORS,
            items: responseJson,
        });
    }
}

function* deleteContractor(action: DeleteContractorAction) {
    const response = yield call(deleteContractorFunc, action.id);
    if (response.status !== 200) {
        yield put(getErrorAction(ERROR_MESSAGE));
    } else {
        yield getContractors();
    }
}

function* openModalContractor(action: ReadContractorAction) {
    yield put({
        type: MODAL_CONTRACTOR,
        modal: true
    });
}


export function* watchAll() {
    yield all([
        takeEvery(DELETE_CONTRACTOR, deleteContractor),
        takeEvery(SAVE_CONTRACTOR, saveContractor),
        takeEvery(READ_ALL_CONTRACTORS, readAllContractors),
        takeEvery(READ_CONTRACTOR, openModalContractor),
    ]);
}