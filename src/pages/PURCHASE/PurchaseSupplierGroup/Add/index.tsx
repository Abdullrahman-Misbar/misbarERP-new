import { Helmet } from "react-helmet-async"
import Main from "../../../../components/templates/PURCHASE/PurchaseSupplierGroup/Add/Main"

type AddPurchaseSupplierGroup_TP = {
  title: string
}
export default function AddPurchaseSupplierGroup({ title }: AddPurchaseSupplierGroup_TP) {
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
