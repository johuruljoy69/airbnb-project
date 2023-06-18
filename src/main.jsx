import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './contexts/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { router } from './routes/routes'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProvider>
)
