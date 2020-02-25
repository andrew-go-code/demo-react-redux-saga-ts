import {ErrorType} from "./ErrorTypes";

export const MODAL_ERROR = "MODAL_ERROR";

export interface GetErrorModalAction {
    type: typeof MODAL_ERROR,
    errorModalOpen: boolean
    item?: ErrorType
}

export type ErrorActionTypes = GetErrorModalAction;