import { AllRoutesProvider } from "./routing/allRoutes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { createTheme, ThemeProvider, Theme } from "@mui/material"
import createCache from "@emotion/cache"
import { CacheProvider } from '@emotion/react';


function App() {
  const theme = (outerTheme: Theme) =>
    createTheme({
      direction: "rtl",
      // palette: {
      //   mode: outerTheme.palette.mode,
      // },
    })

  const cacheRtl = createCache({
    key: "muirtl",
  })
  return (
    <div>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <AllRoutesProvider />
          <ToastContainer rtl={true} />
          <ReactQueryDevtools initialIsOpen={false} position={"bottom"} />
        </ThemeProvider>
      </CacheProvider>
    </div>
  )
}

export default App
