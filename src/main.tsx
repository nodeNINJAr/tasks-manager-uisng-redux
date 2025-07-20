import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { RouterProvider } from 'react-router'
import router from './router'
import { ThemeProvider } from './providers/theme-provider'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
       <Provider store={store}>
           <RouterProvider router={router}>
               <App />
          </RouterProvider>
       </Provider>
     </ThemeProvider>
  </StrictMode>,
)
