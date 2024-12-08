import { Helmet } from "react-helmet-async"
import Main from "../../../../components/templates/PURCHASE/PurchaseOrder/Add/Main"

type EditPurchaseOrder_TP = {
  title: string
}
export default function EditPurchaseOrder({ title }: EditPurchaseOrder_TP) {
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
