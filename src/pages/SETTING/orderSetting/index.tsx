import { Helmet } from 'react-helmet-async'
import Main from '../../../components/templates/SETTING/OrderSetting/Main'

type OrderSetting_TP = {
    title:string
}

function OrderSetting({title}:OrderSetting_TP) {
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

export default OrderSetting