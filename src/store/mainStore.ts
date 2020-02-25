import { createStore, combineReducers, applyMiddleware } from "redux"
import { reducer as formReducer } from 'redux-form'
import { contractorReducer} from "../components/contractor/contractorReducer";
import createSagaMiddleware from 'redux-saga'
import {watchAll} from '../components/contractor/ContactorSaga'
import {modalReducer} from "../components/modal/modalReducer";
import {barReducer} from "../bar/barReducer";
import {contractReducer} from "../components/contract/contratReducer";
import {watchAllContract} from "../components/contract/contractSaga";
import {watchLogin} from "../components/login/loginSaga";
import {loginReducer} from "../components/login/loginReducer";
import {errorReducer} from "../components/error/errorReducer";


export const rootReducer = combineReducers({
    login: loginReducer,
    contracts: contractReducer,
    contractors: contractorReducer,
    modal: modalReducer,
    bar: barReducer,
    error: errorReducer,
    form: formReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchLogin);
sagaMiddleware.run(watchAll);
sagaMiddleware.run(watchAllContract);
export default store;