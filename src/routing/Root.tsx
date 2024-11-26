// import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react"
// import OutsideClickHandler from "react-outside-click-handler";
import { useNavigate } from "react-router"
import { Outlet } from "react-router-dom"
import { SideBar } from "../components/organisms/Sidebar"
import NavBar from "../components/organisms/NavBar"
// import NavBar from "../components/organisms/Navbar";
// import { SideBar2 } from "../components/organisms/Sidebar/Sidebar";
// import { useAuth } from "../context/auth-and-perm/AuthProvider";

export const Root = () => {


  // if (!!user) {
  return (
    <div className="grid h-screen grid-cols-[17%_83%] grid-rows-[auto_1fr] ">
      <div className="col-start-1 col-end-2 row-span-full">
        <SideBar />
      </div>

      <nav className="col-start-2 col-end-3 row-start-1 bg-white">
        <NavBar />
      </nav>

      <main className="col-start-2 col-end-3 row-start-2 p-10 overflow-y-auto bg-white">
        <Outlet />
        
      </main>
    </div>
  )
  // } else {
  //   navigate("/login");
  // }
}
