export interface AuthType {
    login: string,
    password: string
}

export interface UserType {
    login: string,
    name: string
}

export interface ActiveUserType {
    isLoginFailed: boolean
}