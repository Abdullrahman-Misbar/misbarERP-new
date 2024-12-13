import { Helmet } from "react-helmet-async"
import Main from "../../../components/templates/PURCHASE/PurchaseSupplier/Main"

type PurchaseSupplier_TP = {
  title: string
}
export default function PurchaseSupplier({ title }: PurchaseSupplier_TP) {
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
