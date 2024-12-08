import { t } from "i18next";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/login";
import PurchaseRequest from "../pages/PURCHASE/PurchaseRequest";
import AddPurchaseRequest from "../pages/PURCHASE/PurchaseRequest/Add";
import EditPurchaseRequest from "../pages/PURCHASE/PurchaseRequest/Edit";
import { ErrorPage } from "./ErrorPage";
import { Root } from "./Root";
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
          path="/purchase/PurchaseRequest"
          element={<PurchaseRequest title={t("Purchase request")} />
          
        }
        />
        <Route
          path="/purchase/PurchaseRequest/add"
          element={<AddPurchaseRequest title={t("Add Purchase request")} />}
        />
        <Route
          path="/purchase/PurchaseRequest/edit/:id"
          element={<EditPurchaseRequest title={t("Edit Purchase request")} />}
        />
        {/* ----------------------------------------- */}
        <Route
          path="/purchase/PurchasOrder"
          element={<PurchaseOrder title={t("Purchase order")} />
          
        }
        />
        <Route
          path="/purchase/PurchasOrder/add"
          element={<AddPurchaseOrder title={t("Add Purchase order")} />}
        />
        <Route
          path="/purchase/PurchasOrder/edit/:id"
          element={<EditPurchaseOrder title={t("Edit Purchase order")} />}
        />

      </Route>

      <Route
        errorElement={<ErrorPage />}
        path="/login"
        element={<Login title={t("login")} />}
      />
    </Routes>
  );
};
