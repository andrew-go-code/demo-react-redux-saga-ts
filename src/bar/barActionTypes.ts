import {Pages} from "./BarTypes";

export const CHANGE_PAGE = "CHANGE_PAGE";

export interface ChangePageAction {
    type: typeof CHANGE_PAGE;
    page: Pages
}

export const ENCHOR_EL = "ENCHOR_EL";

export interface EnchorElActionType {
    type: typeof ENCHOR_EL;
    enchor: null | HTMLElement;
}

export type BarActionTypes = ChangePageAction & EnchorElActionType;