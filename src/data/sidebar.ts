import { FaRegCircle } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import Arrows from "../components/atoms/icons/arrowsIcon";
import HomeIcon from "../components/atoms/icons/HomeIcon";
import InputsIcon from "../components/atoms/icons/InputsIcon";
import OprationsIcon from "../components/atoms/icons/OprationsIcon";
import ReportsIcon from "../components/atoms/icons/ReportsIcon";
import Setting from "../components/atoms/icons/SettingIcon";
export type MenuItem_TP = {
  id: string;
  icon: IconType;
  label: string;
  link?: string;

  items?: {
    id: string;
    icon: IconType;
    label: string;
    link?: string;
    items?: MenuItem_TP[];
  }[];
};

export const sideBarItems: MenuItem_TP[] = [
  {
    id: crypto.randomUUID(),
    label: "home",
    icon: HomeIcon,
    link: "/",
  },
  { header: "القائمة الرئيسية" },
  {
    id: crypto.randomUUID(),
    label: "Configuration and settings",
    // link: "settings",
    icon: Arrows,
    items: [
      {
        id: crypto.randomUUID(),
        label: "setting",
        icon: Setting,
        items: [
          {
            id: crypto.randomUUID(),
            label: "Order settings",
            link: "/setting/orders",
            icon: FaRegCircle,
          },
          {
            id: crypto.randomUUID(),
            label: "Billing settings",
            link: "/setting/invoices",
            icon: FaRegCircle,
          },
          {
            id: crypto.randomUUID(),
            label: "Logistics preparations",
            link: "/setting/logistic",
            icon: FaRegCircle,
          },
          {
            id: crypto.randomUUID(),
            label: "Setting up the information window",
            link: "/setting/information",
            icon: FaRegCircle,
          },
        ],
      },
      {
        id: crypto.randomUUID(),
        icon: FaRegCircle,
        label: "Home screen",
        link: "/mainScreen",
      },
      {
        id: crypto.randomUUID(),
        icon: FaRegCircle,
        label: "Supplier groups",
      },
      {
        id: crypto.randomUUID(),
        icon: FaRegCircle,
        label: "Tags",
      },
      {
        id: crypto.randomUUID(),
        icon: FaRegCircle,
        label: "Payment terms",
      },
      {
        id: crypto.randomUUID(),
        icon: FaRegCircle,
        label: "Types of purchase agreements",
      },
      // inputs select
    ],
  },

  {
    id: crypto.randomUUID(),
    label: "Inputs",

    icon: InputsIcon,
    items: [
      {
        id: crypto.randomUUID(),
        label: "Purchasing representatives",
        link: "",
        icon: FaRegCircle,
      },
      {
        id: crypto.randomUUID(),
        label: "Items",
        link: "",
        icon: FaRegCircle,
      },
      {
        id: crypto.randomUUID(),
        label: "Suppliers",
        link: "",
        icon: FaRegCircle,
      },
      {
        id: crypto.randomUUID(),
        label: "Class variables",
        link: "",
        icon: FaRegCircle,
      },
    ],
  },

  // Ordering and purchasing processes
  { header: " عمليات الطلب والمشتريات" },
  {
    id: crypto.randomUUID(),
    label: "Operations",

    icon: OprationsIcon,
    items: [
      {
        id: crypto.randomUUID(),
        label: "Purchase Request",
        link: "/purchase/PurchaseRequest",
        icon: FaRegCircle,
      },
      {
        id: crypto.randomUUID(),
        label: "Purchase quotes",
        link: "/purchase/PurchasQutations",
        icon: FaRegCircle,
      },
      {
        id: crypto.randomUUID(),
        label: "purchase order",
        link: "/purchase/PurchasOrder",
        icon: FaRegCircle,
      },
      {
        id: crypto.randomUUID(),
        label: "Purchase receipt",
        link: "/purchase/PurchasReceipt",
        icon: FaRegCircle,
      },
      {
        id: crypto.randomUUID(),
        label: "Purchase invoice",

        icon: FaRegCircle,
        items: [
          {
            id: crypto.randomUUID(),
            label: "Local purchase invoices",
            link: "/purchase/invoices/local",
            icon: FaRegCircle,
          },
          {
            id: crypto.randomUUID(),
            label: "External purchases",

            icon: FaRegCircle,
            items: [
              {
                id: crypto.randomUUID(),
                label: "Documentary credit cards",
                link: "",
                icon: FaRegCircle,
              },
              {
                id: crypto.randomUUID(),
                label: "Types of expenses for documentary credits",
                link: "",
                icon: FaRegCircle,
              },
              {
                id: crypto.randomUUID(),
                label: "Documentary credits",
                link: "",
                icon: FaRegCircle,
              },
              {
                id: crypto.randomUUID(),
                label: "External purchase invoices",
                link: "",
                icon: FaRegCircle,
              },
            ],
          },
        ],
      },
   
      {
        id: crypto.randomUUID(),
        label: "Purchase return",

        icon: FaRegCircle,
      },

      {
        id: crypto.randomUUID(),
        label: "Notifications",

        icon: FaRegCircle,
        items: [
          {
            id: crypto.randomUUID(),
            label: "debit notification",
            link: "/purchase/notification/debit",
            icon: FaRegCircle,
          },
          {
            id: crypto.randomUUID(),
            label: "Credit notification",
            link: "/purchase/notification/credit",
            icon: FaRegCircle,
          },
        ],
      },
      {
        id: crypto.randomUUID(),
        label: "Purchase agreements",
        link: "",
        icon: FaRegCircle,
      },
      {
        id: crypto.randomUUID(),
        label: "Processing free quantities",
        link: "",
        icon: FaRegCircle,
      },
      {
        id: crypto.randomUUID(),
        label: "Receipts",

        icon: FaRegCircle,
        items: [
          {
            id: crypto.randomUUID(),
            label: "Cash Receipts",
            link: "/receipts?type=cash-receipts",
            icon: FaRegCircle,
          },
          {
            id: crypto.randomUUID(),
            label: "Cash Payments",
            link: "/receipts?type=cash-payments",
            icon: FaRegCircle,
          },
          {
            id: crypto.randomUUID(),
            label: "Transfer Receipts",
            link: "/receipts?type=transfer-receipts",
            icon: FaRegCircle,
          },
        ],
      },
    ],
  },

  // select notification

  {
    id: crypto.randomUUID(),
    label: "Reports",
    icon: ReportsIcon,
    items: [
      {
        id: crypto.randomUUID(),
        label: "Purchases",
        link: "",
        icon: FaRegCircle,
        items: [
          {
            id: crypto.randomUUID(),
            label: "Bills",
            link: "",
            icon: FaRegCircle,
          },
          {
            id: crypto.randomUUID(),
            label: "Varieties",
            link: "",
            icon: FaRegCircle,
          },
        ],
      },
      {
        id: crypto.randomUUID(),
        label: "Suppliers",
        icon: FaRegCircle,
      },
      {
        id: crypto.randomUUID(),
        label: "The most mobile suppliers",
        icon: FaRegCircle,
      },
      {
        id: crypto.randomUUID(),
        label: "Receivables maturity summary",
        icon: FaRegCircle,
      },
      {
        id: crypto.randomUUID(),
        label: "Receivables reconstruction",
        icon: FaRegCircle,
      },
    ],
  },
];
