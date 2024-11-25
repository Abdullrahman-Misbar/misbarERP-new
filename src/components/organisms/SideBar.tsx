/////////// IMPORTS
///
import { useLocation, useNavigate } from "react-router-dom"
// components
import {
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar"

import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useIsRTL } from "../../hooks/useIsRTL"
import { MenuItem_TP, sideBarItems } from "../../data/sidebar"

type OpenMenus_TP = {
  [key: string]: boolean
}

export const SideBar = () => {
  /////////// CUSTOM HOOKS
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const isRTL = useIsRTL()
  const [opened, setOpened] = useState<OpenMenus_TP>({})
  const { collapseSidebar, collapsed } = useProSidebar()

  const path = location.pathname

  const goTo = (e: any, link: string) => {
    e.preventDefault()
    // left click
    if (e.button === 0) {
      // ctrl + left click
      if (e.ctrlKey) {
        window.open(link, "_blank")
      } else {
        navigate(link)
      }
    } else if (e.button === 1) {
      // middle click
      window.open(link, "_blank")
    }
  }

  const findPathParentMenu = (path: string) => {
    var opened: OpenMenus_TP = {}
    sideBarItems.forEach((item: MenuItem_TP) => {
      // check if item has link
      if (item.link) {
        if (item.link === path) {
          opened[item.id] = true
        }
      }
      // check if item has items
      if (item.items) {
        item.items.forEach((innerItem) => {
          if (innerItem.link) {
            if (innerItem.link === path) {
              opened[item.id] = true
            }
          } else if (innerItem.items) {
            innerItem.items.forEach((innerInnerItem) => {
              if (innerInnerItem.link) {
                if (innerInnerItem.link === path) {
                  opened[item.id] = true
                  opened[innerItem.id] = true
                }
              }
            })
          }
        })
      }
    })
    return opened
  }

  useEffect(() => {
    setOpened(findPathParentMenu(path))
  }, [path])

  const isOpen = (id: string) => {
    if (collapsed) return false
    return opened[id]
  }
  const generateItem = (Item: MenuItem_TP) => {
    return Item.items ? (
      <SubMenu
        defaultOpen={isOpen(Item.id)}
        className={
          location.pathname === Item.link
            ? "bg-mainGreen font-bold text-black"
            : "font-bold text-mainBlack"
        }
        key={Item.id}
        label={t(Item.label)}
        icon={<Item.icon size={20} />}
      >
        {Item.items.map((innerItem) => generateItem(innerItem))}
      </SubMenu>
    ) : (
      <MenuItem
        className={
          location.pathname === Item.link
            ? " font-bold text-red-500  hover:text-mainGreen  [&>a]:rounded-md [&>a]:bg-mainGreen"
            : "font-bold text-mainBlack  hover:[&>a]:bg-lightGray"
        }
        key={Item.id}
        onClick={(e) => {
          goTo(e, Item.link!)
        }}
        icon={<Item.icon size={20} />}
        active={location.pathname === Item.link}
      >
        {t(Item.label)}
    </MenuItem>
    )
  }

  return (
    <Sidebar
      rtl={isRTL}
      className="col-start-1 col-end-2 row-start-2 row-end-3 h-screen"
      transitionDuration={270}
      // onMouseEnter={(e) => {
      //   e.preventDefault()
      //   collapseSidebar(false)
      // }}
      // onMouseLeave={(e) => {
      //   e.preventDefault()
      //   collapseSidebar(true)
      // }}
    >
      <div className="px-5 py-2 ">
        <p className="text-primary">مسبار الكون</p>
        <h1>نظام المشتريات</h1>
      </div>
      <Menu>
        {sideBarItems.map((Item, index) => {
          if ((Item as any).header) {
            return (
              <div
                key={index}
                className="px-6 py-2 text-sm font-bold text-gray-600 uppercase"
              >
                {(Item as any).header}
              </div>
            )
          }
          return Item.items ? (
            <SubMenu
              defaultOpen={isOpen(Item.id)}
              className={
                location.pathname === Item.link
                  ? "bg-LightGreen font-bold text-mainOrange"
                  : "font-bold text-mainBlack"
              }
              key={Item.id}
              label={t(Item.label)}
              icon={<Item.icon size={20} />}
              active={location.pathname === Item.link}
            >
              {Item.items.map((innerItem) => generateItem(innerItem))}
            </SubMenu>
          ) : (
            generateItem(Item)
          )
        })}
      </Menu>
    </Sidebar>
  )
}
