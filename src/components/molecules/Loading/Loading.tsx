import { t } from "i18next";

type LoadingProps_TP = {
  mainTitle?: string;
  subTitle?: string;
};

export const Loading = ({
  mainTitle,
  subTitle = t("loading").toString(),
}: LoadingProps_TP) => {

  return (
    <div>
      loading
 </div>
  );
};
