import {ContractorPage} from "./ContractorTypes";
import {
    GET_CONTRACTORS,
    ContractorActionTypes,
    MODAL_CONTRACTOR,
    PREPARE_TO_SAVE_CONTRACTOR
} from "./contractorActionTypes";

const contractorsReducerDefaultState: ContractorPage = {
        items: [],
        modal: false
    }
;

export const contractorReducer = (
    state = contractorsReducerDefaultState,
    action: ContractorActionTypes
): ContractorPage => {
    switch (action.type) {
        case GET_CONTRACTORS:
            return {
                ...state,
                items: action.items,
                modal: action.modal
            };
        case MODAL_CONTRACTOR:
            return {
                ...state,
                modal: action.modal,
            };
        case PREPARE_TO_SAVE_CONTRACTOR:
            return {
                ...state,
                itemToUpdate: action.itemToUpdate || {
                    name: "",
                    inn: "",
                    kpp: "",
                },
            };
        default:
            return {
                ...state
            };
    }
};