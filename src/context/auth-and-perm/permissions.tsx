import { createContext, ReactNode } from "react"
import { permissionsRule_TP } from "../../types"
///
///////// TYPES
type PermissionContextType = {
  isAllowedTo: (permissions: string[], rule?: permissionsRule_TP) => boolean
}

type PermissionCtxProviderProps_TP = {
  children: ReactNode
  userPermissions: string[]
}

///
///////// HELPER VARIABLES
///
const defaultBehavior: PermissionContextType = {
  isAllowedTo: () => false,
}
///
//// CTX
export const permissionCtx =
  createContext<PermissionContextType>(defaultBehavior)
// PROVIDER
export const PermissionCtxProvider = ({
  userPermissions,
  children,
}: PermissionCtxProviderProps_TP) => {
  /////////// VARIABLES
  ///
  const isAllowedTo = (
    permissions: string[],
    rule: permissionsRule_TP = "AND"
  ) => {
    switch (rule) {
      case "AND":
        return permissions.every((perm) => userPermissions.includes(perm))
      case "OR":
        return userPermissions.some((perm) => permissions.includes(perm))
      default:
        return false
    }
  }

  ///
  /////////// STATES`
  ///

  //   TODO: i can navigate user here if he is not logged in

  return (
    <permissionCtx.Provider
      value={{
        isAllowedTo,
      }}
    >
      {children}
    </permissionCtx.Provider>
  )
}
