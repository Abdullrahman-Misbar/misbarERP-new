import { Helmet } from "react-helmet-async"
import Main from "../../../../components/templates/PURCHASE/PurchaseTemplate/Add/Main"

type AddPurchaseTemplate_TP = {
  title: string
}
export default function AddPurchaseTemplate({ title }: AddPurchaseTemplate_TP) {
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
