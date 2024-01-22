import { useEffect, useState } from "react"
import { productList } from "./productsContext"
import { PropTypes } from "prop-types"
import axios from "axios"



export function ProductsListProvider( props ) {
    const [products, setProducts] = useState([]);
    const url = "http://localhost:3000/products";
    
    useEffect(() =>{
      const fetchData = async () =>{
        const response = await axios.get(url)
        setProducts(response.data)
      }
      fetchData()
    }, [])

  return (
    <productList.Provider value={{products, setProducts}}>
      {props.children}
    </productList.Provider>
  )
}

ProductsListProvider.propTypes = {
    children: PropTypes.element,
}
