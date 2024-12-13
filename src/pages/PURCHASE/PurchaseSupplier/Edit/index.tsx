import { Helmet } from "react-helmet-async"
import Main from "../../../../components/templates/PURCHASE/PurchaseSupplier/Add/Main"

type EditPurchaseSupplier_TP = {
  title: string
}
export default function EditPurchaseSupplier({ title }: EditPurchaseSupplier_TP) {
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
