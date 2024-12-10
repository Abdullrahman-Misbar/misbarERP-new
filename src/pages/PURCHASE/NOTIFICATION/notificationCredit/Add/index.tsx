import { Helmet } from "react-helmet-async"
import Main from "../../../../../components/templates/PURCHASE/NOTIFICATION/notificationCredit/Add/Main"

type AddNotificationCredit_TP = {
  title: string
}
export default function AddNotificationCredit({ title }: AddNotificationCredit_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <Main />
      </div>
    </>
  )
}
