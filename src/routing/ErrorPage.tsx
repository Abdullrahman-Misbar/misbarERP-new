import { Link, useRouteError } from "react-router-dom";
// import { Button } from "../components/atoms/buttons/Button";
import { t } from "i18next";
import NotFound from "../pages/404";
// import Error404 from "../components/atoms/icons/error404";

type Error_TP = {
  statusText: string;
  message: string;
};
export const ErrorPage = () => {
  return (
    <>
      <NotFound />
    </>
  );
};
