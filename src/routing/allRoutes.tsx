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
import Receipts from "../pages/PURCHASE/Receipts";
import AddReceipt from "../pages/PURCHASE/Receipts/Add";
import EditReceipt from "../pages/PURCHASE/Receipts/Edit";

import NotificationDebit from "../pages/PURCHASE/NOTIFICATION/notificationDebit";
import NotificationCredit from "../pages/PURCHASE/NOTIFICATION/notificationCredit";
import AddNotificationDebit from "../pages/PURCHASE/NOTIFICATION/notificationDebit/Add";
import AddInvoiceLocal from "../pages/PURCHASE/INVOICES/invoicesLocal/Add";
import EditNotificationDebit from "../pages/PURCHASE/NOTIFICATION/notificationDebit/Edit";
import AddNotificationCredit from "../pages/PURCHASE/NOTIFICATION/notificationCredit/Add";
import EditNotificationCredit from "../pages/PURCHASE/NOTIFICATION/notificationCredit/Edit";
import OrderSetting from "../pages/SETTING/orderSetting";
import Setting from "../pages/SETTING";
import InvoiceSetting from "../pages/SETTING/invoiceSetting";
import LogisticSetting from "../pages/SETTING/Logistic";
import InformationWindowSetting from "../pages/SETTING/InformationWindowSetting";
import MainScreen from "../pages/MainScreen";
import PurchaseInvoiceReport from "../pages/PURCHASE/REPORTS/purchaseInvoiceReport";
import AddInvoiceExternal from "../pages/PURCHASE/INVOICES/invoicesExternal/Add";
import InvoicesExternal from "../pages/PURCHASE/INVOICES/invoicesExternal";

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
           <Route
          path="/purchase/invoices/external"
          element={<InvoicesExternal title={t("Invoices External")} />}
        />
          <Route
          path="/purchase/invoices/external/add"
          element={<AddInvoiceExternal title={t("Add Invoices External")} />}
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

        {/* ------------------------------------------ */}
        <Route
          path="/purchase/notification/debit"
          element={<NotificationDebit title={t("Notification Debit")} />}
        />
        <Route
          path="/purchase/notification/debit/add"
          element={<AddNotificationDebit title={t("Add Notification Debit")} />}
        />
        <Route
          path="/purchase/notification/debit/edit"
          element={<NotificationDebit title={t("Edit Notification Debit")} />}
        />
        <Route
          path="/purchase/notification/debit/edit/:id"
          element={
            <EditNotificationDebit title={t("Edit Notification Debit")} />
          }
        />
        <Route
          path="/purchase/notification/credit"
          element={<NotificationCredit title={t("Notification Credit")} />}
        />
        <Route
          path="/purchase/notification/credit/add"
          element={
            <AddNotificationCredit title={t("Add Notification Credit")} />
          }
        />

        <Route
          path="/purchase/notification/credit/edit/:id"
          element={
            <EditNotificationCredit title={t("Edit Notification Credit")} />
          }
        />

     
       
        {/* SETTING */}
        {/* <Route
          path="/setting/orders"
          element={<OrderSetting title={t("Order Setting")} />}
        /> */}

        <Route
          path="/MainScreen"
          element={<MainScreen title={t("MainScreen")} />}
        />

        {/* ------------------Reports ------------------------ */}
        <Route
          path="/purchase/reports/purchaseInvoiceReport"
          element={<PurchaseInvoiceReport title={t("invoices Setting")} />}
        />
        {/* ------------------setting ------------------------ */}

        <Route path="/setting" element={<Setting />}>
          <Route
            path="/setting/orders"
            element={<OrderSetting title={t("Order Setting")} />}
          />
          <Route
            path="/setting/invoices"
            element={<InvoiceSetting title={t("invoices Setting")} />}
          />
          <Route
            path="/setting/logistic"
            element={<LogisticSetting title={t("logistic Setting")} />}
          />
          <Route
            path="/setting/information"
            element={
              <InformationWindowSetting title={t("Information  Setting")} />
            }
          />
        </Route>
      </Route>

      <Route
        errorElement={<ErrorPage />}
        path="/login"
        element={<Login title={t("login")} />}
      />
    </Routes>
  );
};
