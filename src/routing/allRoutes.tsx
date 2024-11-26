import { t } from "i18next";
import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { Root } from "./Root";
import Home from "../pages/Home";
import Login from "../pages/login";

export const AllRoutesProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route path="*" element={<ErrorPage />} />
        <Route index element={<Home title={t("Home")} />} />
      </Route>

      <Route
        errorElement={<ErrorPage />}
        path="/login"
        element={<Login title={t("login")} />}
      />
    </Routes>
  )
};
