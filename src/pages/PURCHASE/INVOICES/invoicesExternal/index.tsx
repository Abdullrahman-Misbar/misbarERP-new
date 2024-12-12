import { Helmet } from 'react-helmet-async'
import Main from '../../../../components/templates/PURCHASE/INVOICES/InvoicesExternal/Main'

type InvoicesExternal_TP = {
    title:string
}

function InvoicesExternal({title}:InvoicesExternal_TP) {
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

export default InvoicesExternal