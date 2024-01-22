import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Nav_Bar } from './components/nav_bar/Nav_Bar'
import { Home, Products, Product_Details, Product_Form, NotFound } from "./pages/index"





function App() {

  return (
    <>
     <Nav_Bar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='products' element={<Products />} />
      <Route path='products' element={<Products />} />
      <Route path='products/:id' element={<Product_Details />} />
      <Route path='products/:id/edit' element={<Product_Form />} />
      <Route path='*' element={<NotFound />} />
     </Routes>
    </>
  )
}

export default App
