import { Helmet } from "react-helmet-async"
import Main from "../../../components/templates/PURCHASE/PurchaseTemplate/Main"

type PurchaseTemplate_TP = {
  title: string
}
export default function PurchaseTemplate({ title }: PurchaseTemplate_TP) {
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
