import { Helmet } from "react-helmet-async"
import Main from "../../../../components/templates/PURCHASE/PurchaseSupplier/Add/Main"

type AddPurchaseSupplier_TP = {
  title: string
}
export default function AddPurchaseSupplier({ title }: AddPurchaseSupplier_TP) {
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
