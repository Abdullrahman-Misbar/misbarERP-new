import { t } from "i18next";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/login";
import MainScreen from "../pages/MainScreen";
import DocumentaryCreditCards from "../pages/PURCHASE/INVOICES/DocumentaryCreditCards";
import InvoicesExternal from "../pages/PURCHASE/INVOICES/invoicesExternal";
import AddInvoiceExternal from "../pages/PURCHASE/INVOICES/invoicesExternal/Add";
import InvoicesLocal from "../pages/PURCHASE/INVOICES/invoicesLocal";
import AddInvoiceLocal from "../pages/PURCHASE/INVOICES/invoicesLocal/Add";
import InvoicesReturns from "../pages/PURCHASE/INVOICES/InvoicesReturns";
import AddInvoiceReturn from "../pages/PURCHASE/INVOICES/InvoicesReturns/Add";
import NotificationCredit from "../pages/PURCHASE/NOTIFICATION/notificationCredit";
import AddNotificationCredit from "../pages/PURCHASE/NOTIFICATION/notificationCredit/Add";
import EditNotificationCredit from "../pages/PURCHASE/NOTIFICATION/notificationCredit/Edit";
import NotificationDebit from "../pages/PURCHASE/NOTIFICATION/notificationDebit";
import AddNotificationDebit from "../pages/PURCHASE/NOTIFICATION/notificationDebit/Add";
import EditNotificationDebit from "../pages/PURCHASE/NOTIFICATION/notificationDebit/Edit";
import PurchaseOrder from "../pages/PURCHASE/PurchaseOrder";
import AddPurchaseOrder from "../pages/PURCHASE/PurchaseOrder/Add";
import EditPurchaseOrder from "../pages/PURCHASE/PurchaseOrder/Edit";
import PurchaseRequest from "../pages/PURCHASE/PurchaseRequest";
import AddPurchaseRequest from "../pages/PURCHASE/PurchaseRequest/Add";
import EditPurchaseRequest from "../pages/PURCHASE/PurchaseRequest/Edit";
import PurchaseSupplier from "../pages/PURCHASE/PurchaseSupplier";
import AddPurchaseSupplier from "../pages/PURCHASE/PurchaseSupplier/Add";
import EditPurchaseSupplier from "../pages/PURCHASE/PurchaseSupplier/Edit";
import PurchasQutations from "../pages/PURCHASE/PurchasQutations";
import AddPurchasQutations from "../pages/PURCHASE/PurchasQutations/Add";
import EditPurchasQutations from "../pages/PURCHASE/PurchasQutations/Edit";
import PurchasReceipt from "../pages/PURCHASE/PurchasReceipt";
import AddPurchasReceipt from "../pages/PURCHASE/PurchasReceipt/Add";
import EditPurchasReceipt from "../pages/PURCHASE/PurchasReceipt/Edit";
import Receipts from "../pages/PURCHASE/Receipts";
import AddReceipt from "../pages/PURCHASE/Receipts/Add";
import EditReceipt from "../pages/PURCHASE/Receipts/Edit";
import PurchaseInvoiceReport from "../pages/PURCHASE/REPORTS/purchaseInvoiceReport";
import Setting from "../pages/SETTING";
import InformationWindowSetting from "../pages/SETTING/InformationWindowSetting";
import InvoiceSetting from "../pages/SETTING/invoiceSetting";
import LogisticSetting from "../pages/SETTING/Logistic";
import OrderSetting from "../pages/SETTING/orderSetting";
import { ErrorPage } from "./ErrorPage";
import { Root } from "./Root";
import EditInvoiceLocal from "../pages/PURCHASE/INVOICES/invoicesLocal/Edit";
import EditInvoiceReturn from "../pages/PURCHASE/INVOICES/InvoicesReturns/edit";
import ProcessingFreeQuantities from "../pages/ProcessingFreeQuantities";
import AddProcessingFreeQuantities from "../pages/ProcessingFreeQuantities/Add";
import EditProcessingFreeQuantities from "../pages/ProcessingFreeQuantities/Edit";
import PurchaseTemplate from "../pages/PURCHASE/PurchaseTemplate";
import EditPurchaseTemplate from "../pages/PURCHASE/PurchaseTemplate/Edit";
import AddPurchaseTemplate from "../pages/PURCHASE/PurchaseTemplate/Add";
import PurchaseSupplierGroup from "../pages/PURCHASE/PurchaseSupplierGroup";
import AddPurchaseSupplierGroup from "../pages/PURCHASE/PurchaseSupplierGroup/Add";
import EditPurchaseSupplierGroup from "../pages/PURCHASE/PurchaseSupplierGroup/Edit";
import ManualComparison from "../pages/PURCHASE/PurchaseRequest/ManualComparison";
import AutoComparisonTable from "../pages/PURCHASE/PurchaseRequest/AutoComparison";
import DocumentaryCredit from "../pages/PURCHASE/INVOICES/DocumentaryCredit";
import AddDocumentaryCredit from "../pages/PURCHASE/INVOICES/DocumentaryCredit/Add";
import EditDocumentaryCredit from "../pages/PURCHASE/INVOICES/DocumentaryCredit/Edit";
import TypeOfDocumentaryCredit from "../pages/PURCHASE/INVOICES/TypeOfDocumentaryCredit";
import EditPurchaseAgreement from "../pages/PURCHASE/PurchaseAgreement/Edit";
import AddPurchaseAgreement from "../pages/PURCHASE/PurchaseAgreement/Add";
import PurchaseAgreement from "../pages/PURCHASE/PurchaseAgreement";

import AddPurchasFreeQuantities from "../pages/PURCHASE/FreeQuantitiesProcessingOperations/Add/index";
import EditPurchasFreeQuantities from "../pages/PURCHASE/FreeQuantitiesProcessingOperations/Edit/index";
import FreeQuantitiesProcessingOperations from "../pages/PURCHASE/FreeQuantitiesProcessingOperations/index";
import PurchaseAgreementsType from "../pages/PURCHASE/PurchaseAgreementsType/index";
import AddPurchaseAgreementsType from "../pages/PURCHASE/PurchaseAgreementsType/Add/index";
import EditPurchaseAgreementsType from "../pages/PURCHASE/PurchaseAgreementsType/Edit/index";
import PurchaseRepresentative from "../pages/PURCHASE/PurchaseRepresentative";
import AddPurchaseRepresentative from "../pages/PURCHASE/PurchaseRepresentative/Add";
import EditPurchaseRepresentative from "../pages/PURCHASE/PurchaseRepresentative/Edit";
import PurchaseRequestsOffers from "../pages/PURCHASE/PurchaseRequest/PurchaseRequestsOffers";

 

export const AllRoutesProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route path="*" element={<ErrorPage />} />
        <Route index element={<Home title={t("Home")} />} />

        {/* PURCHASE */}

        <Route
          path="/purchase/PurchaseAgreementsType"
          element={<PurchaseAgreementsType title={t("Purchase request")} />}
        />
        <Route
          path="/purchase/PurchaseAgreementsType/add"
          element={<AddPurchaseAgreementsType title={t("Add Purchase request")} />}
        />
        <Route
          path="/purchase/PurchaseAgreementsType/edit/:id"
          element={<EditPurchaseAgreementsType title={t("Edit Purchase request")} />}
        />
        {/* ----------------------------------------- */}

        <Route
          path="/purchase/PurchaseAgreement"
          element={<PurchaseAgreement title={t("Purchase request")} />}
        />
        <Route
          path="/purchase/PurchaseAgreement/add"
          element={<AddPurchaseAgreement title={t("Add Purchase request")} />}
        />
        <Route
          path="/purchase/PurchaseAgreement/edit/:id"
          element={<EditPurchaseAgreement title={t("Edit Purchase request")} />}
        />
        {/* ----------------------------------------- */}
        <Route
          path="/purchase/FreeQuantitiesProcessingOperations"
          element={
            <FreeQuantitiesProcessingOperations
              title={t("Purchase Free Quantities")}
            />
          }
        />
        <Route
          path="/purchase/FreeQuantitiesProcessingOperations/add"
          element={
            <AddPurchasFreeQuantities
              title={t("Add Purchase Free Quantities")}
            />
          }
        />
        <Route
          path="/purchase/FreeQuantitiesProcessingOperations/edit/:id"
          element={
            <EditPurchasFreeQuantities
              title={t("Edit Purchase Free Quantities")}
            />
          }
        />
        {/* ----------------------------------------- */}

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
          path="/purchase/invoices/local/edit/:id"
          element={<EditInvoiceLocal title={t("Edit Invoices Local")} />}
        />
        <Route
          path="/purchase/invoices/external"
          element={<InvoicesExternal title={t("Invoices External")} />}
        />
        <Route
          path="/purchase/invoices/external/add"
          element={<AddInvoiceExternal title={t("Add Invoices External")} />}
        />
        {/* ----------------------------- */}
        <Route
          path="/purchase/invoices/InvoicesReturns"
          element={<InvoicesReturns title={t("Invoices Returns")} />}
        />
        <Route
          path="/purchase/invoices/InvoicesReturns/add"
          element={<AddInvoiceReturn title={t("Add Invoices External")} />}
        />
        <Route
          path="/purchase/invoices/InvoicesReturns/edit/:id"
          element={
            <EditInvoiceReturn title={t("Add Invoices EditInvoiceReturn")} />
          }
        />
        <Route
          path="/purchase/invoices/DocumentaryCreditCards"
          element={
            <DocumentaryCreditCards title={t("Document Credit Cards")} />
          }
        />
        <Route
          path="/purchase/invoices/DocumentaryCredit"
          element={<DocumentaryCredit title={t("Document Credit")} />}
        />
        <Route
          path="/purchase/invoices/DocumentaryCredit/add"
          element={<AddDocumentaryCredit title={t("Add Document Credit")} />}
        />
        <Route
          path="/purchase/invoices/DocumentaryCredit/edit/:id"
          element={<EditDocumentaryCredit title={t("Edit Document Credit")} />}
        />
        <Route
          path="/purchase/invoices/TypeOfDocumentaryCredit"
          element={<TypeOfDocumentaryCredit title={t("Document Credit")} />}
        />

        {/* ----------------------- */}
        <Route
          path="/purchase/invoices/ProcessingFreeQuantities"
          element={
            <ProcessingFreeQuantities
              title={t("Invoices ProcessingFreeQuantities")}
            />
          }
        />
        <Route
          path="/purchase/invoices/ProcessingFreeQuantities/add"
          element={
            <AddProcessingFreeQuantities
              title={t("Add Invoices ProcessingFreeQuantities")}
            />
          }
        />
        <Route
          path="/purchase/invoices/ProcessingFreeQuantities/edit/:id"
          element={
            <EditProcessingFreeQuantities
              title={t("edit Invoices ProcessingFreeQuantities")}
            />
          }
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
        {/* ----------------------------------------- */}
        <Route
          path="/purchase/PurchaseSupplier"
          element={<PurchaseSupplier title={t("Suppliers")} />}
        />
        <Route
          path="/purchase/PurchaseSupplier/add"
          element={<AddPurchaseSupplier title={t("Add Purchase request")} />}
        />
        <Route
          path="/purchase/PurchaseSupplier/edit/:id"
          element={<EditPurchaseSupplier title={t("Edit Purchase request")} />}
        />

        {/* ----------------------------------------- */}
        <Route
          path="/purchase/PurchaseSupplierGroup"
          element={<PurchaseSupplierGroup title={t("Suppliers Groups")} />}
        />
        <Route
          path="/purchase/PurchaseSupplierGroup/add"
          element={<AddPurchaseSupplierGroup title={t("Add Supplier Group")} />}
        />
        <Route
          path="/purchase/PurchaseSupplierGroup/edit/:id"
          element={
            <EditPurchaseSupplierGroup title={t("Edit Supplier Group")} />
          }
        />
        {/* ----------------------------------------- */}
        <Route
          path="/purchase/PurchaseTemplate"
          element={<PurchaseTemplate title={t("Payment terms")} />}
        />
        <Route
          path="/purchase/PurchaseTemplate/add"
          element={<AddPurchaseTemplate title={t("Add Payment terms")} />}
        />
        <Route
          path="/purchase/PurchaseTemplate/edit/:id"
          element={<EditPurchaseTemplate title={t("Edit Payment terms")} />}
        />

        <Route
          path="/purchase/PurchaseRequest/auto/:id"
          element={<AutoComparisonTable title={t("Auto Comparison")} />}
        />
        <Route
          path="/purchase/PurchaseRequest/manual/:id"
          element={<ManualComparison title={t("Manual Comparison")} />}
        />
        <Route
          path="/purchase/PurchaseRequest/PurchaseRequestsOffers/:id"
          element={
            <PurchaseRequestsOffers title={t("Purchase Request Offers")} />
          }
        />

        {/* ----------------------------------------- */}
        <Route
          path="/purchase/PurchaseRepresentative"
          element={
            <PurchaseRepresentative title={t("Purchasing representatives")} />
          }
        />
        <Route
          path="/purchase/PurchaseRepresentative/add"
          element={
            <AddPurchaseRepresentative
              title={t("Add Purchasing representatives")}
            />
          }
        />
        <Route
          path="/purchase/PurchaseRepresentative/edit/:id"
          element={
            <EditPurchaseRepresentative
              title={t("Edit Purchasing representatives")}
            />
          }
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
