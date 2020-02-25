import {ModalType} from "./ModalTypes";
import {MODAL_CONFIRMATION, ModalAction} from "./modalActionTypes";

const modalReducerDefaultState: ModalType = {
    isConfirmationModalOpened: false,
    isConfirmed: false,
    onConfirmFunc: null
};

export const modalReducer = (
    state = modalReducerDefaultState,
    action: ModalAction
): ModalType => {
    switch (action.type) {
        case MODAL_CONFIRMATION:
            return {
                ...state,
                isConfirmationModalOpened: action.isConfirmationModalOpened,
                isConfirmed: action.isConfirmed,
                onConfirmFunc: action.onConfirmFunc,
                onDeclineFunc: action.onDeclineFunc
            };

        default:
            return {
                ...state
            }
    }
};