export interface ContractorType {
    id?: number;
    name: string;
    inn: string;
    kpp: string;
}

export interface ContractorPage {
    items: ContractorType[],
    itemToUpdate?: ContractorType
    modal: boolean
}