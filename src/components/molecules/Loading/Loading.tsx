import { t } from "i18next"
import { Spinner } from "../../atoms/UI/Spinner"

type LoadingProps_TP = {
  mainTitle?: string
  subTitle?: string
}

export const Loading = ({
  mainTitle,
  subTitle = t("loading").toString(),
}: LoadingProps_TP) => {
  return (
    <div>
      <Spinner />
      <p>{mainTitle}</p>
      <p>{subTitle}</p>
    </div>
  )
}
