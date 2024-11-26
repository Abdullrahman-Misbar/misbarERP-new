import { Helmet } from "react-helmet-async"
import Main from "../../components/templates/login/Main"
type Login_TP = {
  title: string
}
function Login({ title }: Login_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <Main />
      </div>
    </>
  )
}

export default Login