import { Button, Container, Form } from "react-bootstrap";
import './Product-Form.css'
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { productList } from "../../context/productsContext";
import { useNavigate, useParams } from "react-router-dom";

export function Product_Form() {
  const { products } = useContext( productList );
  const url = "http://localhost:3000/products"
  const navigate = useNavigate()
  const { id } = useParams()

  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: null,
    stock: null,
    brand: "",
    thumbnail: "",
  })

  useEffect(() =>{
    if (id != 0) {
      const findProduct = products.find(product => product.id == id)
      if (findProduct) {
      setProductData(findProduct)
      }
    }
  }, [id, products])

  const changeHandler = (e) =>{
    setProductData({
      ...productData,
      [e.target.name] : e.target.value
    })
  }

  const submitHandler = async (e) =>{
    let allDataPlusId = {
      ...productData,
      id: 1 + products.length++
    }
    e.preventDefault()
    if (id == 0) {
      await axios.post(url, allDataPlusId);
    }else{
      await axios.put(`${url}/${id}`, productData)
    }
    setProductData({
      title: "",
      description: "",
      price: null,
      stock: null,
      brand: "",
      thumbnail: "",
    })
    navigate('/products')
  }

  return (
    <Form onSubmit={submitHandler} className="product-form bg-light">
      <Container>
        <div className="product-form__content py-5">
          <Form.Group className="mb-3">
            <Form.Label>Product Title</Form.Label>
            <Form.Control value={productData.title} onChange={changeHandler} className="py-2" type="text" placeholder="Enter Product title" name="title" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Product Description</Form.Label>
            <Form.Control value={productData.description} onChange={changeHandler} className="py-2" type="text" placeholder="Enter Product description" name="description" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Product Price</Form.Label>
            <Form.Control value={productData.price} onChange={changeHandler} className="py-2" type="number" placeholder="Enter Product Price" name="price" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Product Quantity</Form.Label>
            <Form.Control value={productData.stock} onChange={changeHandler} className="py-2" type="number" placeholder="Enter Product Quantity" name="stock" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Product Brand</Form.Label>
            <Form.Control value={productData.brand} onChange={changeHandler} className="py-2" type="text" placeholder="Enter Product brand" name="brand" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Product Image src</Form.Label>
            <Form.Control value={productData.thumbnail} onChange={changeHandler} className="py-2" type="text" placeholder="Enter Product Image" name="thumbnail" />
          </Form.Group>
          {id == 0 ? <Button variant="dark" type="submit"> Add New Product </Button> : <Button variant="success" type="submit">Edit Product</Button>}
        </div>
      </Container>
    </Form>
  )
}