//saga actions
import {AuthType} from "./LoginTypes";

export const TRY_LOGIN = "TRY_LOGIN";

export interface TryLoginActionType {
    type: typeof TRY_LOGIN;
    auth: AuthType;
    onSuccess: any;
    onError: any;
}

export type LoginSagaActionTypes = TryLoginActionType;

//reducer actions
export const LOGIN_FAIL = "LOGIN_FAIL";

export interface LoginFailActionType {
    type: typeof LOGIN_FAIL;
}

export type LoginReducerActionTypes = LoginFailActionType;