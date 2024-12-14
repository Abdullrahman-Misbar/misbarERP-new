import { Helmet } from "react-helmet-async"
import Main from "../../../components/templates/PURCHASE/FreeQuantitiesProcessingOperations/Main"

type PurchasFreeQuantities_TP = {
  title: string
}
export default function PurchasFreeQuantities({ title }:PurchasFreeQuantities_TP) {
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
