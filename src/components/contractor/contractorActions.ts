import {ContractorType} from "./ContractorTypes";
import {
    ContractorActionTypes,
    DELETE_CONTRACTOR,
    READ_ALL_CONTRACTORS,
    SAVE_CONTRACTOR,
    READ_CONTRACTOR,
    PREPARE_TO_SAVE_CONTRACTOR, MODAL_CONTRACTOR
} from "./contractorActionTypes";

const readAllContractors = (): ContractorActionTypes => ({
    type: READ_ALL_CONTRACTORS
});

const saveContractor = (item: ContractorType): ContractorActionTypes => ({
    type: SAVE_CONTRACTOR,
    item
});

const deleteContractor = (id: number): ContractorActionTypes => ({
    type: DELETE_CONTRACTOR,
    id
});

const openContractorModal = (): ContractorActionTypes => ({
    type: READ_CONTRACTOR
});

const closeContractorModal = (): ContractorActionTypes => ({
    type: MODAL_CONTRACTOR,
    modal: false
});

const prepareToSaveContractor = (item?: ContractorType):ContractorActionTypes => ({
    type: PREPARE_TO_SAVE_CONTRACTOR,
    itemToUpdate: item
});

export const startDeleteContractor = (id: number) => {
    return deleteContractor(id);
};

export const startSaveContractor = (item: ContractorType) => {
    return saveContractor(item);
};

export const startReadAllContractors = () => {
    return readAllContractors()
};

export const startOpenContractorModal = () => {
    return openContractorModal();
};

export const startCloseContractorModal = () => {
    return closeContractorModal();
};

export const startPrepareToSaveContractor = (item?: ContractorType) => {
    return prepareToSaveContractor(item);
};