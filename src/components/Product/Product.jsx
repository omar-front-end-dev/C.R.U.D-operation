import axios from "axios";
import { PropTypes } from "prop-types"
import { BiShow } from "react-icons/bi";
import { BiCalendarEdit } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export function Product( { products, setProducts } ) {
  
  const deleteProduct = async (id) =>{
    await axios.delete(`http://localhost:3000/products/${id}`)
    let newProducts = products.filter(product => product.id != id) 
    setProducts(newProducts)
  }
 
  return (
    <>
      {products.map(item =>{
                return <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}$</td>
                <td>{item.stock}</td>
                <td>
                  <NavLink to={`/products/${item.id}`} className="btn btn-warning m-2" title="Show Product Details">
                    <BiShow />
                  </NavLink>
                  <NavLink to={`/products/${item.id}/edit`} className="btn btn-success m-2" title="Edit Product">
                    <BiCalendarEdit />
                  </NavLink>
                  <button onClick={() =>deleteProduct(item.id)} className="btn btn-danger m-2"  title="Delete Product">
                    <BsTrash3 />
                  </button>
                </td>
              </tr>
              })
              }
    </>
  )
}


Product.propTypes = {
    products: PropTypes.array,
    setProducts: PropTypes.func,
}