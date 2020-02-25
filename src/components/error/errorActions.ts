import {ErrorActionTypes, MODAL_ERROR} from "./errorActionTypes";
import {ErrorType} from "./ErrorTypes";

const modalError = (open: boolean, item?: ErrorType): ErrorActionTypes => {
    return {
        type: MODAL_ERROR,
        errorModalOpen: open,
        item: item
    }
};

export const startModalError  = (open: boolean, item?: ErrorType) => modalError(open, item);