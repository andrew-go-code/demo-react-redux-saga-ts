import {ContractPageType} from "./ContractTypes";
import {
    ContractActionReducerTypes,
    MODAL_CONTRACT,
    PREPARE_TO_SAVE_CONTRACT, SHOW_CONTRACTORS, SHOW_CONTRACTS
} from "./contractActionTypes";

const defaultContractState: ContractPageType = {
    items: [],
    modal: false,
    contractors: []
};

export const contractReducer = (state = defaultContractState, action: ContractActionReducerTypes): ContractPageType => {
    switch (action.type) {
        case MODAL_CONTRACT:
            return {
                ...state,
                modal: action.modal
            };
        case PREPARE_TO_SAVE_CONTRACT:
            return {
                ...state,
                itemPreparedToSave: action.item
            };
        case SHOW_CONTRACTS:
            return {
                ...state,
                items: action.items
            };
        case SHOW_CONTRACTORS:
            return {
                ...state,
                contractors: action.contractors
            };
        default:
            return {
                ...state
            }
    }
};