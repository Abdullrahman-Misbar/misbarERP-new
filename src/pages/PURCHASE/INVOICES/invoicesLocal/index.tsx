import { Helmet } from 'react-helmet-async'
import Main from '../../../../components/templates/PURCHASE/INVOICES/InvoicesLocal/Main'

type InvoicesLocal_TP = {
    title:string
}

function InvoicesLocal({title}:InvoicesLocal_TP) {
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

export default InvoicesLocal