import {ContractorType} from "./ContractorTypes";

//saga actions
export const READ_ALL_CONTRACTORS = "READ_ALL_CONTRACTORS";
export const SAVE_CONTRACTOR = "SAVE_CONTRACTOR";
export const DELETE_CONTRACTOR = "DELETE_CONTRACTOR";
export const READ_CONTRACTOR = "READ_CONTRACTOR";

export interface ReadAllContractorsAction {
    type: typeof READ_ALL_CONTRACTORS;
}

export interface SaveContractorAction {
    type: typeof SAVE_CONTRACTOR;
    item: ContractorType;
}

export interface DeleteContractorAction {
    type: typeof DELETE_CONTRACTOR;
    id: number;
}

export interface ReadContractorAction {
    type: typeof READ_CONTRACTOR;
}

//reducer actions
export const MODAL_CONTRACTOR = "MODAL_CONTRACTOR";
export const PREPARE_TO_SAVE_CONTRACTOR = "PREPARE_TO_SAVE_CONTRACTOR";
export const GET_CONTRACTORS = "GET_CONTRACTORS";

export interface GetContractorsAction {
    type: typeof GET_CONTRACTORS;
    items: ContractorType[];
    modal: boolean;
}

export interface GetContractorModalAction {
    type: typeof MODAL_CONTRACTOR;
    modal: boolean
}

export interface SetPreparedToSaveContractor {
    type: typeof PREPARE_TO_SAVE_CONTRACTOR;
    itemToUpdate?: ContractorType;
}


export type ContractorActionTypes =
    | ReadAllContractorsAction
    | SaveContractorAction
    | DeleteContractorAction
    | ReadContractorAction
    | GetContractorModalAction
    | SetPreparedToSaveContractor
    | GetContractorsAction