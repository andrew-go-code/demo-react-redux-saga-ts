export interface ErrorType {
    header: string
    text: string
}

export interface ErrorPage {
    errorModalOpen: boolean
    item?: ErrorType
}