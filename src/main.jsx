import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './contexts/AuthProvider'
import { router } from './routes/routes'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Toaster />
    <RouterProvider router={router} />
  </AuthProvider>
)
