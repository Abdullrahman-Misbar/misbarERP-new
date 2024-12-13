import { Helmet } from 'react-helmet-async'
import Main from '../../../../components/templates/PURCHASE/INVOICES/DocumentaryCreditCards/Main'

type DocumentaryCreditCards_TP = {
    title:string
}

function DocumentaryCreditCards({title}:DocumentaryCreditCards_TP) {
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

export default DocumentaryCreditCards