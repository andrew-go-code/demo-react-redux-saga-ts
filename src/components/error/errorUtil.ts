import {ErrorType} from "./ErrorTypes";
import {MODAL_ERROR} from "./errorActionTypes";

export const createError = (text: string, header: string = "Error!"): ErrorType => ({
    header: header,
    text: text
});

export function getErrorAction(message: string) {
    return {
        type: MODAL_ERROR,
        errorModalOpen: true,
        item: createError(message)
    }
}