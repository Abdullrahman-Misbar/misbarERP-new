import { useNavigate } from "react-router"
import { Outlet } from "react-router-dom"
import NavBar from "../components/organisms/NavBar"
import { useAuth } from "../context/auth-and-perm/AuthProvider"
import { useEffect } from "react"
import { SideBar } from "../components/organisms/SideBar"

export const Root = () => {
  const { token } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate("/login")
    }
  }, [navigate, token])

  if (token) {
    return (
      <div className="grid h-screen grid-cols-[17%_83%] grid-rows-[auto_1fr] ">
        <div className="col-start-1 col-end-2 row-span-full">
          <SideBar />
        </div>

        <nav className="col-start-2 col-end-3 row-start-1 bg-white">
          <NavBar />
        </nav>

        <main className="col-start-2 col-end-3 row-start-2 p-10 overflow-y-auto bg-gray-300">
          <Outlet />
        </main>
      </div>
    )
  } else {
    navigate("/login")
  }
}
