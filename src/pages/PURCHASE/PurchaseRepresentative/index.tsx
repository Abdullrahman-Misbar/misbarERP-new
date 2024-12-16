import { Helmet } from "react-helmet-async"
import Main from "../../../components/templates/PURCHASE/PurchaseRepresentative/Main"

type PurchaseRepresentative_TP = {
  title: string
}
export default function PurchaseRepresentative({ title }: PurchaseRepresentative_TP) {
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
