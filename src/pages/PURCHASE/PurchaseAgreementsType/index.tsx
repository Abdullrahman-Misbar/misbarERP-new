import { Helmet } from "react-helmet-async"
import Main from "../../../components/templates/PURCHASE/PurchaseAgreementsType/Main"

type PurchaseAgreementsType_TP = {
  title: string
}
export default function PurchaseAgreementsType({ title }:PurchaseAgreementsType_TP) {
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
