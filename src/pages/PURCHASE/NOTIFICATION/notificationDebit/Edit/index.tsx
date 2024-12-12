import { Helmet } from "react-helmet-async"
import Main from "../../../../../components/templates/PURCHASE/NOTIFICATION/notificationDebit/Add/Main"

type EditNotificationDebit_TP = {
  title: string
}
export default function EditNotificationDebit({ title }: EditNotificationDebit_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <Main editable={true} />
      </div>
    </>
  )
}
