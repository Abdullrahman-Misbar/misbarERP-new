import { Helmet } from 'react-helmet-async'
import Main from '../../../../../components/templates/PURCHASE/INVOICES/DocumentaryCredit/Add/Main'

type AddDocumentaryCredit_TP = {
    title:string
}

function AddDocumentaryCredit({title}:AddDocumentaryCredit_TP) {
  return (
    <>
     <Helmet>
        <title>{title}</title>
      </Helmet>
    <div>
      <Main/>
    </div>
    </>
  )
}

export default AddDocumentaryCredit