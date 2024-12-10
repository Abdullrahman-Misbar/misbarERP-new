import { Helmet } from "react-helmet-async"
import Main from "../../../../../components/templates/PURCHASE/NOTIFICATION/notificationCredit/Add/Main"

type EditNotificationCredit_TP = {
  title: string
}
export default function EditNotificationCredit({ title }: EditNotificationCredit_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <Main  editable/>
      </div>
    </>
  )
}
