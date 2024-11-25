import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { BrowserRouter } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "./i18n"
import { ProSidebarProvider } from "react-pro-sidebar"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
})
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <HelmetProvider>
          <Suspense
            fallback={
              <div className="h-[100vh] flex items-center justify-center">
                {/* <Spinner size="large" /> */}
                loading ...
              </div>
            }
          >
            <ProSidebarProvider>
              <App />
            </ProSidebarProvider>
          </Suspense>
        </HelmetProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
