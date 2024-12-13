import { Helmet } from "react-helmet-async"
import Main from "../../../../components/templates/PURCHASE/PurchaseTemplate/Add/Main"

type EditPurchaseTemplate_TP = {
  title: string
}
export default function EditPurchaseTemplate({ title }: EditPurchaseTemplate_TP) {
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
