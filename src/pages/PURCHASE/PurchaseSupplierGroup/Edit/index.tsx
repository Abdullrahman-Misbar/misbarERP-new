import { Helmet } from "react-helmet-async"
import Main from "../../../../components/templates/PURCHASE/PurchaseSupplierGroup/Add/Main"

type EditPurchaseSupplierGroup_TP = {
  title: string
}
export default function EditPurchaseSupplierGroup({ title }: EditPurchaseSupplierGroup_TP) {
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
