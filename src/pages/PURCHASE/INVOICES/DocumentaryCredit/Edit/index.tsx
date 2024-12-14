import { Helmet } from 'react-helmet-async'
import Main from '../../../../../components/templates/PURCHASE/INVOICES/DocumentaryCredit/Add/Main'

type EditDocumentaryCredit_TP = {
    title:string
}

function EditDocumentaryCredit({title}:EditDocumentaryCredit_TP) {
  return (
    <>
     <Helmet>
        <title>{title}</title>
      </Helmet>
    <div>
      <Main editable/>
    </div>
    </>
  )
}

export default EditDocumentaryCredit