import { Email_TP } from "../../types"

export type LoginCredentials_TP = {
    email: string
    password: string
}

export type Permission_TP = {
    id:string
    routes: string
}
export type User_TP = {
    id: string,
    name: string,
    phone: string,
    email: Email_TP,
    username: string,
    city_id: string,
    nationality_id: string,
    country_id: string,
    role_id: string,
    branch_id: string,
    date_of_birth: string,
    national_number: string,
    national_expire_date: string,
    address: string,
}
export type AuthCtx_TP = {
    isLoggedIn: boolean
    isLoggingIn: boolean
    isLoggingOut: boolean
    logInHandler: (credentials: LoginCredentials_TP) => void
    logOutHandler: () => void
    frontLogOutHandler: () => void
    userToken: string | undefined,
    userData: User_TP | undefined
    permissions: string[] | undefined
    isLoadingUpdatedUserData: boolean
}

export type LoginResponseData_TP = { token: string, user: User_TP, permissions: Permission_TP[] }