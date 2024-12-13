import { Helmet } from 'react-helmet-async'
import Main from '../../../../components/templates/PURCHASE/INVOICES/DocumentaryCredit/Main'

type DocumentaryCredit_TP = {
    title:string
}

function DocumentaryCredit({title}:DocumentaryCredit_TP) {
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

export default DocumentaryCredit