import { Helmet } from "react-helmet-async"
import Main from "../../../components/templates/PURCHASE/PurchaseSupplierGroup/Main"

type PurchaseSupplierGroup_TP = {
  title: string
}
export default function PurchaseSupplierGroup({ title }: PurchaseSupplierGroup_TP) {
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
