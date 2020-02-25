export const MODAL_CONFIRMATION = "MODAL_CONFIRMATION";
export const ITEM_FORM_MODAL = "ITEM_FORM_MODAL";

export interface GetModalConfirmationAction {
    type: typeof MODAL_CONFIRMATION;
    isConfirmationModalOpened: boolean;
    isConfirmed: boolean;
    onConfirmFunc: any;
    onDeclineFunc: any;
}

export interface GetItemFormModal {
    type: typeof ITEM_FORM_MODAL;
}

export type ModalAction = GetModalConfirmationAction | GetItemFormModal;
