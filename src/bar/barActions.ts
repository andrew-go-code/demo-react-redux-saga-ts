import {Pages} from "./BarTypes";
import {CHANGE_PAGE, ENCHOR_EL, EnchorElActionType, ChangePageAction} from "./barActionTypes";

const changePage = (page: Pages): ChangePageAction => ({
        type: CHANGE_PAGE,
        page: page
});

export const startChangePage = (page: Pages) => {
    return changePage(page);
};

const enchorEl = (enchor: null | HTMLElement): EnchorElActionType => ({
    type: ENCHOR_EL,
    enchor: enchor
});

export const startEnchorEl = (enchor: null | HTMLElement) => enchorEl(enchor);