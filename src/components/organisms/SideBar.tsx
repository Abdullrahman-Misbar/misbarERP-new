import { useLocation, useNavigate } from "react-router-dom";

// components
import {
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useIsRTL } from "../../hooks/useIsRTL";
import { MenuItem_TP, sideBarItems } from "../../data/sidebar";
import { FaRegCircle } from "react-icons/fa";

type OpenMenus_TP = {
  [key: string]: boolean;
};

export const SideBar = ({ setCollapsed, collapsed }) => {
  /////////// CUSTOM HOOKS
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const isRTL = useIsRTL();
  const [opened, setOpened] = useState<OpenMenus_TP>({});
  // const { setCollapseSidebar, collapsed } = useProSidebar();

  const path = location.pathname;

  const goTo = (e: any, link: string) => {
    e.preventDefault();

    if (e.button === 0) {
      // Left click
      if (e.ctrlKey) {
        window.open(link, "_blank");
      } else {
        navigate(link);
      }
    } else if (e.button === 1) {
      // Middle click
      window.open(link, "_blank");
    }
  };

  const findPathParentMenu = (path: string) => {
    const opened: OpenMenus_TP = {};

    sideBarItems.forEach((item: MenuItem_TP) => {
      // Check if item has a link
      if (item.link && item.link === path) {
        opened[item.id] = true;
      }

      // Check if item has sub-items
      if (item.items) {
        item.items.forEach((innerItem) => {
          if (innerItem.link && innerItem.link === path) {
            opened[item.id] = true;
          } else if (innerItem.items) {
            innerItem.items.forEach((innerInnerItem) => {
              if (innerInnerItem.link && innerInnerItem.link === path) {
                opened[item.id] = true;
                opened[innerItem.id] = true;
              }
            });
          }
        });
      }
    });

    return opened;
  };

  useEffect(() => {
    setOpened(findPathParentMenu(path));
  }, [path]);

  const isOpen = (id: string) => {
    if (collapsed) return false;
    return opened[id];
  };

  const generateItem = (Item: MenuItem_TP) => {
    return Item.items ? (
      <SubMenu
        defaultOpen={isOpen(Item.id)}
        className={`text-[14px] font-somarLight my-1 ${
          location.pathname === Item.link
            ? "bg-LightGreen !font-somarBold "
            : "text-mainBlack "
        } `}
        key={Item.id}
        label={<p className="!font-somarBold">{t(Item.label)}</p>}
        icon={
          <div>
            {/* 1 */}
            <FaRegCircle className="text-gray-300" />
          </div>
        }
      >
        {Item.items.map((innerItem) => (
          <div className=" text-[14px] font-somarLight">
            {generateItem(innerItem)}
          </div>
        ))}
      </SubMenu>
    ) : (
      <MenuItem
        className={`text-[14px]  transition duration-200 ${
          location.pathname === Item.link
            ? "text-black !font-somarBold bg-gray-100 hover:bg-gray-200 hover:text-primary"
            : "text-mainBlack hover:bg-gray-100 hover:text-primary"
        } `}
        key={Item.id}
        onClick={(e) => {
          goTo(e, Item.link!);
        }}
        icon={<Item.icon className="text-gray-300" />}
        active={location.pathname === Item.link}
      >
        {t(Item.label)}
      </MenuItem>
    );
  };

  return (
    <Sidebar
      rtl={isRTL}
      className="h-screen col-start-1 col-end-2 row-start-2 row-end-3 relative"
      transitionDuration={250}
      width="325px"
    
    
      collapsed={collapsed}
    >
      <div
        className="absolute left-[10px] top-[10px] text-[30px] cursor-pointer"
        onClick={() => setCollapsed(!collapsed)}
      >
        x
      </div>
      <div className="flex flex-col items-start px-5 py-2">
        <div className="w-full p-3">
          <img src="/src/assets/logo.png" alt="Logo" />
        </div>
        <p className="text-primary ">مسبار الكون</p>
        <h1 className="text-xl text-light font-somarBold">نظام المشتريات</h1>
      </div>
      <Menu>
        {sideBarItems.map((Item, index) => {
          if ((Item as any).header) {
            return collapsed ? (
              ""
            ) : (
              <div
                key={index}
                className="px-6 py-2 text-xs font-bold text-gray-400  font-somarLight "
              >
                {(Item as any).header}
              </div>
            );
          }
          return Item.items ? (
            <SubMenu
              defaultOpen={isOpen(Item.id)}
              className={`${
                location.pathname === Item.link
                  ? "bg-LightGreen font-somarBold "
                  : " text-mainBlack "
              } `} 
              key={Item.id}
              label={t(Item.label)}
              icon={<Item.icon size={20} />}
              active={location.pathname === Item.link}
            >
              {Item.items.map((innerItem) => generateItem(innerItem))}
            </SubMenu>
          ) : (
            generateItem(Item)
          );
        })}
      </Menu>
    </Sidebar>
  );
};
