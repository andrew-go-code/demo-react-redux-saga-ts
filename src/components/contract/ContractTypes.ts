import {ContractorType} from "../contractor/ContractorTypes";

export interface ContractType {
    id?: number;
    name: string;
    contractor: ContractorType
}

export interface ContractPageType {
    items: ContractType[];
    itemPreparedToSave?: ContractType;
    modal: boolean
    contractors: ContractorType[];
}