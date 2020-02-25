
//saga actions
import {ContractType} from "./ContractTypes";
import {ContractorType} from "../contractor/ContractorTypes";

export const READ_ALL_CONTRACTS = "READ_ALL_CONTRACTS";
export const READ_CONTRACT = "READ_CONTRACT";
export const SAVE_CONTRACT = "SAVE_CONTRACT";
export const DELETE_CONTRACT = "DELETE_CONTRACT";
export const READ_CONTRACTORS = "READ_CONTRACTORS";

export interface ReadContractorsActionType {
    type: typeof READ_CONTRACTORS
}

export interface SaveContractActionType {
    type: typeof SAVE_CONTRACT;
    item: ContractType;
}

export interface ReadAllContractsActionType {
    type: typeof READ_ALL_CONTRACTS;
}

export interface ReadContractActionType {
    type: typeof READ_CONTRACT;
    id: number
}

export interface DeleteContractActionType {
    type: typeof DELETE_CONTRACT;
    id: number
}

//reducer actions
export const MODAL_CONTRACT = "MODAL_CONTRACT";
export const PREPARE_TO_SAVE_CONTRACT = "PREPARE_TO_SAVE_CONTRACT";
export const SHOW_CONTRACTS = "SHOW_CONTRACTS";
export const SHOW_CONTRACTORS = "SHOW_CONTRACTORS";

export interface ModalContractActionType {
    type: typeof MODAL_CONTRACT;
    modal: boolean
}

export interface PrepareToSaveContractActionType {
    type: typeof PREPARE_TO_SAVE_CONTRACT;
    item?: ContractType
}

export interface ShowContractsActionType {
    type: typeof SHOW_CONTRACTS,
    items: ContractType[]
}

export interface ShowContractorsActionType {
    type: typeof SHOW_CONTRACTORS,
    contractors: ContractorType[]
}

export type ContractActionTypes =
    SaveContractActionType |
    ReadAllContractsActionType |
    ReadContractActionType |
    DeleteContractActionType |
    ModalContractActionType |
    PrepareToSaveContractActionType |
    ShowContractsActionType;

export type ContractActionReducerTypes = ModalContractActionType | PrepareToSaveContractActionType | ShowContractsActionType | ShowContractorsActionType;

export type ContractActionSagaTypes =
    SaveContractActionType |
    ReadAllContractsActionType |
    ReadContractActionType |
    DeleteContractActionType;