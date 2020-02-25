import {ActiveUserType} from "./LoginTypes";
import {LOGIN_FAIL, LoginReducerActionTypes} from "./loginActionTypes";

const defaultLoginState: ActiveUserType = {
    isLoginFailed: false
};

export const loginReducer  = (state = defaultLoginState, action: LoginReducerActionTypes): ActiveUserType => {
    switch (action.type) {
        case LOGIN_FAIL:
            return {
                ...state,
                isLoginFailed: true
            };
        default:
            return {
                ...state
            }
    }
};