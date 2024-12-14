import { Helmet } from "react-helmet-async"
import Main from "../../../../components/templates/PURCHASE/FreeQuantitiesProcessingOperations/Add/Main"

type EditPurchasFreeQuantities_TP = {
  title: string
}
export default function EditPurchasFreeQuantities({ title }: EditPurchasFreeQuantities_TP) {
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
