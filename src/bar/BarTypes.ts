export enum Pages {
    CONTRACTORS, CONTRACTS
}

export interface BarType {
    page: Pages,
    enchor: null | HTMLElement,
    isMenuOpen: boolean
}