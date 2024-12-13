import { Helmet } from 'react-helmet-async'
import Main from '../../../../components/templates/PURCHASE/INVOICES/TypeOfDocumentaryCredit/Main'

type TypeOfDocumentaryCredit_TP = {
    title:string
}

function TypeOfDocumentaryCredit({title}:TypeOfDocumentaryCredit_TP) {
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

export default TypeOfDocumentaryCredit