import {ErrorPage} from "./ErrorTypes";
import {ErrorActionTypes, MODAL_ERROR} from "./errorActionTypes";

const errorDefaultState: ErrorPage = {
    errorModalOpen: false,
    item: undefined
};

export const errorReducer = (
    state = errorDefaultState,
    action: ErrorActionTypes
): ErrorPage => {
    switch (action.type) {
        case MODAL_ERROR:
            return {
                ...state,
                errorModalOpen: action.errorModalOpen,
                item: action.item
            };
        default:
            return {
                ...state
            }
    }
};
