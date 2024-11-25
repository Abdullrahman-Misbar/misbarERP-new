import { Link, useRouteError } from "react-router-dom";
// import { Button } from "../components/atoms/buttons/Button";
import { t } from "i18next";
// import Error404 from "../components/atoms/icons/error404";

type Error_TP = {
  statusText: string;
  message: string;
};
export const ErrorPage = () => {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center bg-white rounded-2xl dark:bg-dark-tertiary justify-center space-y-16 space-x-8 lg:flex-row lg:space-y-0 2xl:space-x-0">
        <div className="w-full justify-center p-4 lg:items-end">
          <div className="flex justify-center">
            {/* <Error404 /> */}
          </div>

          <div className="flex gap-x-3 justify-center">
            <Link
              to="/"
              className="flex items-center space-x-2 rounded bg-main px-4 py-2 text-gray-100 transition duration-150 hover:bg-blue-700"
              title={`${t("Return Home")}`}
            >
              <span>{t("Return Home")}</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>

            {/* <Button action={() => window.location.reload()}>
              {t("Reloading")}
            </Button> */}
          </div>
        </div>
      </div>
    </>
  );
};
