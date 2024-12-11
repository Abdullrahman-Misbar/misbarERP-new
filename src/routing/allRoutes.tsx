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
import PurchasQutations from "../pages/PURCHASE/PurchasQutations";
import AddPurchasQutations from "../pages/PURCHASE/PurchasQutations/Add";
import EditPurchasQutations from "../pages/PURCHASE/PurchasQutations/Edit";
import PurchasReceipt from "../pages/PURCHASE/PurchasReceipt";
import AddPurchasReceipt from "../pages/PURCHASE/PurchasReceipt/Add";
import EditPurchasReceipt from "../pages/PURCHASE/PurchasReceipt/Edit";
import InvoicesLocal from "../pages/PURCHASE/INVOICES/invoicesLocal";
import AddInvoiceLocal from "../pages/PURCHASE/INVOICES/invoicesLocal/Add";
import Receipts from "../pages/PURCHASE/Receipts";
import AddReceipt from "../pages/PURCHASE/Receipts/Add";
import EditReceipt from "../pages/PURCHASE/Receipts/Edit";

export const AllRoutesProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route path="*" element={<ErrorPage />} />
        <Route index element={<Home title={t("Home")} />} />

        {/* PURCHASE */}
        <Route
          path="/purchase/PurchaseRequest"
          element={<PurchaseRequest title={t("Purchase request")} />}
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
          element={<PurchaseOrder title={t("Purchase order")} />}
        />
        <Route
          path="/purchase/PurchasOrder/add"
          element={<AddPurchaseOrder title={t("Add Purchase order")} />}
        />
        <Route
          path="/purchase/PurchasOrder/edit/:id"
          element={<EditPurchaseOrder title={t("Edit Purchase order")} />}
        />

        {/* ----------------------------------------- */}
        <Route
          path="/purchase/PurchasQutations"
          element={<PurchasQutations title={t("Purchase quotes")} />}
        />
        <Route
          path="/purchase/PurchasQutations/add"
          element={<AddPurchasQutations title={t("Add Purchase quotes")} />}
        />
        <Route
          path="/purchase/PurchasQutations/edit/:id"
          element={<EditPurchasQutations title={t("Edit Purchase quotes")} />}
        />

        {/* ----------------------------------------- */}
        <Route
          path="/purchase/PurchasReceipt"
          element={<PurchasReceipt title={t("Purchase receipt")} />}
        />
        <Route
          path="/purchase/PurchasReceipt/add"
          element={<AddPurchasReceipt title={t("Add Purchase receipt")} />}
        />
        <Route
          path="/purchase/PurchasReceipt/edit/:id"
          element={<EditPurchasReceipt title={t("Edit Purchase receipt")} />}
        />
        {/* ------------------------------------------ */}
        <Route
          path="/purchase/invoices/local"
          element={<InvoicesLocal title={t("Invoices Local")} />}
        />
        <Route
          path="/purchase/invoices/local/add"
          element={<AddInvoiceLocal title={t("Add Invoices Local")} />}
        />

        {/* ------------------------------------------ */}
        <Route
          path="purchase/receipts"
          element={<Receipts title={t("Receipts")} />}
        />
        <Route
          path="purchase/receipts/add"
          element={<AddReceipt title={t("Add Receipt")} />}
        />
        <Route
          path="purchase/receipts/edit/:id"
          element={<EditReceipt title={t("Edit Receipt")} />}
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
