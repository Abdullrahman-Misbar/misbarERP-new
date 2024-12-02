import { GrGroup } from "react-icons/gr";
import { IconType } from "react-icons/lib";
import { TbSmartHome } from "react-icons/tb";
import AgreementIcons from "../assets/icon/AgreementIcons";
import Arrows from "../assets/icon/arrowsIcon";
import BondsIcon from "../assets/icon/BondsIcon";
import DollarIcon from "../assets/icon/DollarIcon";
import InputsIcon from "../assets/icon/InputsIcon";
import InvoicesIcon from "../assets/icon/InvoicesIcon";
import LeftArowIcon from "../assets/icon/LeftArowIcon";
import LocalInvoicesIcon from "../assets/icon/LocalInvoicesIcon";
import NotificationIcon from "../assets/icon/NotificationIcon";
import OfferPriceIcon from "../assets/icon/OfferPriceIcon";
import OprationsIcon from "../assets/icon/OprationsIcon";
import PaymentTermsIcon from "../assets/icon/PaymentTermsIcon";
import PurchaseOrder from "../assets/icon/PurchaseOrderIcon";
import PurcheseIcon from "../assets/icon/PurcheseIcon";
import ReceiptOrderIcon from "../assets/icon/ReceiptOrderIcon";
import Reconstruction from "../assets/icon/Reconstruction";
import ReportsIcon from "../assets/icon/ReportsIcon";
import RequestOrderIcon from "../assets/icon/RequestOrderIcon";
import ScreenIcon from "../assets/icon/ScreenIcon";
import Setting from "../assets/icon/SettingIcon";
import SummaryIcon from "../assets/icon/SummaryIcon";
import SupliersIcon from "../assets/icon/SupliersIcon";
import SupplierIcon from "../assets/icon/SupplierIcon";
import SupplierMovingIcon from "../assets/icon/SupplierMovingIcon";
import TagsIcon from "../assets/icon/TagsIcon";
import TimeIcon from "../assets/icon/TimeIcon";
import TrueIcon from "../assets/icon/TrueIcon";

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
    icon: TbSmartHome,
    label: "home",
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
            icon: GrGroup,
          },
          {
            id: crypto.randomUUID(),
            label: "Billing settings",
            link: "",
            icon: GrGroup,
          },
          {
            id: crypto.randomUUID(),
            label: "Logistics preparations",
            link: "",
            icon: GrGroup,
          },
          {
            id: crypto.randomUUID(),
            label: "Setting up the information window",
            link: "",
            icon: GrGroup,
          },
        ],
      },
      {
        id: crypto.randomUUID(),
        icon: ScreenIcon,
        label: "Home screen",
      },
      {
        id: crypto.randomUUID(),
        icon: SupplierIcon,
        label: "Supplier groups",
      },
      {
        id: crypto.randomUUID(),
        icon: TagsIcon,
        label: "Tags",
      },
      {
        id: crypto.randomUUID(),
        icon: PaymentTermsIcon,
        label: "Payment terms",
      },
      {
        id: crypto.randomUUID(),
        icon: TrueIcon,
        label: "Types of purchase agreements",
      },
      // inputs select
      {
        id: crypto.randomUUID(),
        label: "Inputs",

        icon: InputsIcon,
        items: [
          {
            id: crypto.randomUUID(),
            label: "Purchasing representatives",
            link: "",
            icon: GrGroup,
          },
          {
            id: crypto.randomUUID(),
            label: "Items",
            link: "",
            icon: GrGroup,
          },
          {
            id: crypto.randomUUID(),
            label: "Suppliers",
            link: "",
            icon: GrGroup,
          },
          {
            id: crypto.randomUUID(),
            label: "Class variables",
            link: "",
            icon: GrGroup,
          },
        ],
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
        label: "Purchase order",
        link: "/purchase/purchaseOrder",
        icon: RequestOrderIcon,
      },
      {
        id: crypto.randomUUID(),
        label: "offer price",
        link: "",
        icon: OfferPriceIcon,
      },
      {
        id: crypto.randomUUID(),
        label: "purchase order",
        link: "",
        icon: PurchaseOrder,
      },
      {
        id: crypto.randomUUID(),
        label: "Receipt order",
        link: "",
        icon: ReceiptOrderIcon,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    label: "Purchase invoice",

    icon: InvoicesIcon,
    items: [
      {
        id: crypto.randomUUID(),
        label: "Local purchase invoices",
        link: "",
        icon: LocalInvoicesIcon,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    label: "External purchases",

    icon: DollarIcon,
    items: [
      {
        id: crypto.randomUUID(),
        label: "Documentary credit cards",
        link: "",
        icon: GrGroup,
      },
      {
        id: crypto.randomUUID(),
        label: "Types of expenses for documentary credits",
        link: "",
        icon: GrGroup,
      },
      {
        id: crypto.randomUUID(),
        label: "Documentary credits",
        link: "",
        icon: GrGroup,
      },
      {
        id: crypto.randomUUID(),
        label: "External purchase invoices",
        link: "",
        icon: GrGroup,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    label: "Purchase return",

    icon: LeftArowIcon,
  },
  // select notification
  {
    id: crypto.randomUUID(),
    label: "Notifications",

    icon: NotificationIcon,
    items: [
      {
        id: crypto.randomUUID(),
        label: "City notices",
        link: "",
        icon: GrGroup,
      },
      {
        id: crypto.randomUUID(),
        label: "Credit notes",
        link: "",
        icon: GrGroup,
      },
      {
        id: crypto.randomUUID(),
        label: "Purchase agreements",
        link: "",
        icon: AgreementIcons,
      },
      {
        id: crypto.randomUUID(),
        label: "Processing free quantities",
        link: "",
        icon: TimeIcon,
      },
    ],
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
        icon: GrGroup,
      },
      {
        id: crypto.randomUUID(),
        label: "Receipt bonds",
        link: "",
        icon: GrGroup,
      },
      {
        id: crypto.randomUUID(),
        label: "Transfer bonds",
        link: "",
        icon: GrGroup,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    label: "Reports",
    icon: ReportsIcon,
    items: [
      {
        id: crypto.randomUUID(),
        label: "Purchases",
        link: "",
        icon: PurcheseIcon,
        items: [
          {
            id: crypto.randomUUID(),
            label: "Bills",
            link: "",
            icon: GrGroup,
          },
          {
            id: crypto.randomUUID(),
            label: "Varieties",
            link: "",
            icon: GrGroup,
          },
        ],
      },
      {
        id: crypto.randomUUID(),
        label: "Suppliers",
        icon: SupliersIcon,
      },
      {
        id: crypto.randomUUID(),
        label: "The most mobile suppliers",
        icon: SupplierMovingIcon,
      },
      {
        id: crypto.randomUUID(),
        label: "Receivables maturity summary",
        icon: SummaryIcon,
      },
      {
        id: crypto.randomUUID(),
        label: "Receivables reconstruction",
        icon: Reconstruction,
      },
    ],
  },
];
