import { AllRoutesProvider } from "./routing/allRoutes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

function App() {
  return (
    <div >
      <AllRoutesProvider />
      <ToastContainer rtl={true} />
      <ReactQueryDevtools initialIsOpen={false} position={"bottom"} />
    </div>
  )
}

export default App
