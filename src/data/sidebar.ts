import { FaRegCircle } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { IconType } from "react-icons/lib";
import { TbSmartHome } from "react-icons/tb";
import AgreementIcons from "../components/atoms/icons/AgreementIcons";
import Arrows from "../components/atoms/icons/arrowsIcon";
import BondsIcon from "../components/atoms/icons/BondsIcon";
import DollarIcon from "../components/atoms/icons/DollarIcon";
import InputsIcon from "../components/atoms/icons/InputsIcon";
import InvoicesIcon from "../components/atoms/icons/InvoicesIcon";
import LeftArowIcon from "../components/atoms/icons/LeftArowIcon";
import LocalInvoicesIcon from "../components/atoms/icons/LocalInvoicesIcon";
import NotificationIcon from "../components/atoms/icons/NotificationIcon";
import OfferPriceIcon from "../components/atoms/icons/OfferPriceIcon";
import OprationsIcon from "../components/atoms/icons/OprationsIcon";
import PaymentTermsIcon from "../components/atoms/icons/PaymentTermsIcon";
import PurchaseOrder from "../components/atoms/icons/PurchaseOrderIcon";
import PurcheseIcon from "../components/atoms/icons/PurcheseIcon";
import ReceiptOrderIcon from "../components/atoms/icons/ReceiptOrderIcon";
import Reconstruction from "../components/atoms/icons/Reconstruction";
import ReportsIcon from "../components/atoms/icons/ReportsIcon";
import RequestOrderIcon from "../components/atoms/icons/RequestOrderIcon";
import ScreenIcon from "../components/atoms/icons/ScreenIcon";
import Setting from "../components/atoms/icons/SettingIcon";
import SummaryIcon from "../components/atoms/icons/SummaryIcon";
import SupliersIcon from "../components/atoms/icons/SupliersIcon";
import SupplierIcon from "../components/atoms/icons/SupplierIcon";
import SupplierMovingIcon from "../components/atoms/icons/SupplierMovingIcon";
import TagsIcon from "../components/atoms/icons/TagsIcon";
import TimeIcon from "../components/atoms/icons/TimeIcon";
import TrueIcon from "../components/atoms/icons/TrueIcon";
import HomeIcon from "../components/atoms/icons/HomeIcon";
import { FaRegCircle } from "react-icons/fa";
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
            link: "",
            icon: FaRegCircle,
          },
          {
            id: crypto.randomUUID(),
            label: "Billing settings",
            link: "",
            icon: FaRegCircle,
          },
          {
            id: crypto.randomUUID(),
            label: "Logistics preparations",
            link: "",
            icon: FaRegCircle,
          },
          {
            id: crypto.randomUUID(),
            label: "Setting up the information window",
            link: "",
            icon: FaRegCircle,
          },
        ],
      },
      {
        id: crypto.randomUUID(),
        icon: FaRegCircle,
        label: "Home screen",
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
            label: "City notices",
            link: "",
            icon: FaRegCircle,
          },
          {
            id: crypto.randomUUID(),
            label: "Credit notes",
            link: "",
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
        label: "Bonds",

        icon: BondsIcon,
        items: [
          {
            id: crypto.randomUUID(),
            label: "Exchange bonds",
            link: "",
            icon: FaRegCircle,
          },
          {
            id: crypto.randomUUID(),
            label: "Receipt bonds",
            link: "",
            icon: FaRegCircle,
          },
          {
            id: crypto.randomUUID(),
            label: "Transfer bonds",
            link: "",
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
