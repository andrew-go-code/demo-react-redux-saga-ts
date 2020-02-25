import {CHANGE_PAGE, BarActionTypes, ENCHOR_EL} from "./barActionTypes";
import {Pages, BarType} from "./BarTypes";

const rootDefaultState: BarType = {
    page: Pages.CONTRACTS,
    enchor: null,
    isMenuOpen: false
};

export const barReducer = (state = rootDefaultState, action: BarActionTypes): BarType => {
    switch (action.type) {
        case CHANGE_PAGE:
            return {
                ...state,
                page: action.page
            };
        case ENCHOR_EL:
            return {
                ...state,
                enchor: action.enchor,
                isMenuOpen: !!action.enchor
            };
        default:
            return {
                ...state
            }
    }
};
