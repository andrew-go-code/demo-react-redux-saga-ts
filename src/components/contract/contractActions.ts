import {ContractType} from "./ContractTypes";
import {
    DELETE_CONTRACT,
    DeleteContractActionType,
    MODAL_CONTRACT,
    ModalContractActionType,
    PREPARE_TO_SAVE_CONTRACT,
    PrepareToSaveContractActionType,
    READ_ALL_CONTRACTS,
    READ_CONTRACT, READ_CONTRACTORS,
    ReadAllContractsActionType,
    ReadContractActionType, ReadContractorsActionType,
    SAVE_CONTRACT,
    SaveContractActionType,
    SHOW_CONTRACTS,
    ShowContractsActionType
} from "./contractActionTypes";

const saveContract = (item: ContractType): SaveContractActionType => ({
    type: SAVE_CONTRACT,
    item: item
});

export const startSaveContract = (item: ContractType) => saveContract(item);

const readAllContracts = (): ReadAllContractsActionType => ({
   type: READ_ALL_CONTRACTS
});

export const startReadAllContract = () => readAllContracts();

const readContract = (id: number): ReadContractActionType => ({
    type: READ_CONTRACT,
    id: id
});

export const startReadContract = (id: number) => readContract(id);

const deleteContract = (id: number): DeleteContractActionType => ({
    type: DELETE_CONTRACT,
    id: id
});

export const startDeleteContract = (id: number) => deleteContract(id);

const modalContract = (modal: boolean): ModalContractActionType => ({
    type: MODAL_CONTRACT,
    modal: modal
});

export const startModalContract = (modal: boolean) => modalContract(modal);

const prepareToSaveContract = (item?: ContractType): PrepareToSaveContractActionType => ({
    type: PREPARE_TO_SAVE_CONTRACT,
    item: item
});

export const startPrepareToSaveContract = (item?: ContractType) => prepareToSaveContract(item);

const showContract = (items: ContractType[]): ShowContractsActionType => ({
    type: SHOW_CONTRACTS,
    items: items
});

export const startShowContract = (items: ContractType[]) => showContract(items);

const readContractors = (): ReadContractorsActionType => ({
    type: READ_CONTRACTORS
});

export const startReadContractors = () => readContractors();