import {AuthType} from "./LoginTypes";
import { TRY_LOGIN, TryLoginActionType} from "./loginActionTypes";

const login = (auth: AuthType, onSuccess: any, onError: any):TryLoginActionType  => ({
    type: TRY_LOGIN,
    auth: auth,
    onSuccess: onSuccess,
    onError: onError
});
export const startLogin = (auth: AuthType, onSuccess: any, onError: any) => login(auth, onSuccess, onError);

