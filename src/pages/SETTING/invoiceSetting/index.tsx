import { Helmet } from 'react-helmet-async'
import Main from '../../../components/templates/SETTING/InvoiceSetting/Main'

type InvoiceSetting_TP = {
    title:string
}

function InvoiceSetting({title}:InvoiceSetting_TP) {
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

export default InvoiceSetting