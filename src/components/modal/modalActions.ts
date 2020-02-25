import {MODAL_CONFIRMATION, ModalAction} from "./modalActionTypes";


export const confirmModal = (isOpen: boolean, isConfirmed: boolean, onConfirmFunc?:any, onDeclineFuncL?:any): ModalAction => ({
    type: MODAL_CONFIRMATION,
    isConfirmationModalOpened: isOpen,
    isConfirmed: isConfirmed == null ? false : isConfirmed,
    onConfirmFunc: onConfirmFunc,
    onDeclineFunc: onDeclineFuncL
});

export const startConfirmation = (isOpen: boolean, isConfirmed: boolean, onConfirmFunc?:any, onDeclineFunc?:any ) => {
    return confirmModal(isOpen, isConfirmed, onConfirmFunc, onDeclineFunc);
};