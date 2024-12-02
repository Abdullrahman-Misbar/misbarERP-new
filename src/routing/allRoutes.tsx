import { t } from "i18next";
import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { Root } from "./Root";
import Home from "../pages/Home";
import Login from "../pages/login";
import PurchaseOrder from "../pages/PURCHASE/PurchaseOrder";
import AddPurchaseOrder from "../pages/PURCHASE/PurchaseOrder/Add";
import EditPurchaseOrder from "../pages/PURCHASE/PurchaseOrder/Edit";

export const AllRoutesProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route path="*" element={<ErrorPage />} />
        <Route index element={<Home title={t("Home")} />} />

        {/* PURCHASE */}
        <Route
          path="/purchase/purchaseOrder"
          element={<PurchaseOrder title={t("Purchase Order")} />}
        />
        <Route
          path="/purchase/purchaseOrder/add"
          element={<AddPurchaseOrder title={t("Add Purchase Order")} />}
        />
        <Route
          path="/purchase/purchaseOrder/edit/:id"
          element={<EditPurchaseOrder title={t("Edit Purchase Order")} />}
        />
      </Route>

      <Route
        errorElement={<ErrorPage />}
        path="/login"
        element={<Login title={t("login")} />}
      />
    </Routes>
  )
};
