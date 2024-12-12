import { Helmet } from "react-helmet-async"
import Main from "../../../../../components/templates/PURCHASE/NOTIFICATION/notificationDebit/Add/Main"

type AddNotificationDebit_TP = {
  title: string
}
export default function AddNotificationDebit({ title }: AddNotificationDebit_TP) {
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
