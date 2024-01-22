import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { ProductsListProvider } from './context/ProductsListProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsListProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductsListProvider>
  </React.StrictMode>
)
