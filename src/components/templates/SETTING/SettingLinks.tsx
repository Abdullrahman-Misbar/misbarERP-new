import { Link, useLocation } from "react-router-dom";
import OrderSettingIcon from "../../atoms/icons/OrderSettingIcon";
import BillingIcon from "../../atoms/icons/BillingIcon";
import Logistics from "../../atoms/icons/Logisticsicon";
import InformationWindowIcon from "../../atoms/icons/InformationWindowIcon";

function SettingList() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const getLinkClass = (path) =>
    isActive(path) ? "text-primary font-somarBold" : "text-gray-500";

  const getIconStyle = (path) => ({
    stroke: isActive(path) ? "#3F51B5" : "#B0B0B0", // Primary color if active, gray otherwise
  });

  return (
    <>
      <Link
        to="/setting/orders"
        className={`${getLinkClass(
          "/setting/orders"
        )} flex px-4 py-2 items-center gap-2`}
      >
        <div style={getIconStyle("/setting/orders")}>
          <OrderSettingIcon />
        </div>
        <span>الطلبات</span>
      </Link>
      <Link
        to="/setting/invoices"
        className={`${getLinkClass(
          "/setting/invoices"
        )} flex px-4 py-2 items-center gap-2`}
      >
        <div style={getIconStyle("/setting/invoices")}>
          <BillingIcon />
        </div>
        <span>الفوترة</span>
      </Link>
      <Link
        to="/setting/logistic"
        className={`${getLinkClass(
          "/setting/logistic"
        )} flex px-4 py-2 items-center gap-2`}
      >
        <div style={getIconStyle("/setting/logistic")}>
          <Logistics />
        </div>
        <span>اللوجستيات</span>
      </Link>
      <Link
        to="/setting/information"
        className={`${getLinkClass(
          "/setting/information"
        )} flex px-4 py-2 items-center gap-2`}
      >
        <div style={getIconStyle("/setting/information")}>
          <InformationWindowIcon />
        </div>
        <span>نافذة المعلومات</span>
      </Link>
    </>
  );
}

export default SettingList;
