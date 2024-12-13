import { Helmet } from "react-helmet-async"
import Main from "../../../../components/templates/PURCHASE/PurchaseAgreement/Add/Main"

type EditPurchaseAgreement_TP = {
  title: string
}
export default function EditPurchaseAgreement({ title }: EditPurchaseAgreement_TP) {
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
