import { Avatar } from "@mui/material"
import { deepOrange } from "@mui/material/colors"
import { BiSearchAlt } from "react-icons/bi"
import { IoIosArrowDown } from "react-icons/io"
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5"
// import logo from "../../assets/altebr_logo.png"

const NavBar = () => {
  return (
    <div className="w-100 flex h-14 items-center justify-end p-2 bg-gray-400">
      <div className="me-2 flex  items-center gap-4">
        <div className="flex items-center justify-center gap-2">
          <Avatar>N</Avatar>
          <div>
            <h6 className="m-0">اسم المستخدم</h6>
            <p>مدير النظام</p>
          </div>

          <IoIosArrowDown className="h-4 w-4 fill-mainBlack" />
        </div>
      </div>
    </div>
  )
  //  return (
  //    <div className="w-100 flex h-14 items-center justify-between p-2">
  //      <div className="w-100 flex items-center gap-12 py-6 px-4">
  //        <img src={logo} className="ms-3 h-12 w-12 object-contain" alt="logo" />
  //          <form className="flex items-center rounded-md border-2 border-slate-200 p-1 ">
  //            <input
  //              type="search"
  //              placeholder="بحث"
  //              className=" placeholder-slate-400 border-transparent p-0"
  //            />
  //            <BiSearchAlt className="fill-slate-400" />
  //          </form>

  //      </div>
  //      <div className="me-2 flex  items-center gap-4">
  //        <IoSettingsOutline className="icon fill-mainBlack cursor-pointer" />
  //        <div className=" relative">
  //          <IoNotificationsOutline className="icon fill-mainBlack" />
  //          <span className=" absolute -top-2 left-3 rounded-full  bg-mainRed p-[2px] text-xs text-white">
  //            10
  //          </span>
  //        </div>
  //        <div className="flex items-center justify-center gap-2">
  //          <img src={logo} className="w-6 h-6  object-contain" alt="logo" />
  //          <h6 className="m-0">اسم المستخدم</h6>
  //          <IoIosArrowDown className="h-4 w-4 fill-mainBlack" />
  //        </div>
  //      </div>
  //    </div>
  //  )
}

export default NavBar
