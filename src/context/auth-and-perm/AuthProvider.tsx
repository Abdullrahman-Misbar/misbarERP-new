import Cookies from "js-cookie"
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
} from "react"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "../../hooks"

interface User {
  name: string
}

type AuthProvider_TP = {
  children: ReactNode
}

type AuthContext_TP = {
  user: User | null
  login: (data: User, token: string) => void
  logout: () => void
  token: string | null
}
const AuthContext = createContext<AuthContext_TP | undefined>(undefined)
export const AuthProvider = ({ children }: AuthProvider_TP) => {
  const [user, setUser] = useLocalStorage<User | null>("user", null)
  const [token, setToken] = useLocalStorage<string | null>("token", null)

  const navigate = useNavigate()

  const login = useCallback(
    (data: User | null, token: string) => {
      setUser(data)
      setToken(token)
    },
    [setUser, setToken]
  )

  const logout = useCallback(async () => {
    Cookies.remove("token")
    setUser(null)
    setToken(null)
    navigate("/", { replace: true })
  }, [setUser, setToken, navigate])

  const value = useMemo(
    () => ({
      user: user ?? null,
      login,
      logout,
      token: token ?? null,
    }),
    [login, logout, token, user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
