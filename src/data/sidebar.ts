import { CiSettings } from "react-icons/ci"
import { GrGroup } from "react-icons/gr"
import { IconType } from "react-icons/lib"
import { TbSmartHome } from "react-icons/tb"

export type MenuItem_TP = {
  id: string
  icon: IconType
  label: string
  link?: string

  items?: {
    id: string
    icon: IconType
    label: string
    link?: string
    items?: MenuItem_TP[]
  }[]
}

export const sideBarItems: MenuItem_TP[] = [
  {
    id: crypto.randomUUID(),
    icon: TbSmartHome,
    label: "home",
    link: "/",
  },
  { header: "القائمة الرئيسية" },
  {
    id: crypto.randomUUID(),
    label: "Configuration and settings",
    // link: "settings",
    icon: CiSettings,
    items: [
      {
        id: crypto.randomUUID(),
        label: "setting",

        icon: GrGroup,
        items: [
          {
            id: crypto.randomUUID(),
            label: "Order settings",
            link: "/employees",
            icon: GrGroup,
          },
        ],
      },
    ],
  },
]
