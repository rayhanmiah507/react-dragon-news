import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthProvide from './providers/AuthProvide.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvide>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvide>
  </React.StrictMode>,
)
