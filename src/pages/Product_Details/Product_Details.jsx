import { useContext, useEffect, useState } from "react";
import { productList } from "../../context/productsContext";
import { NavLink, useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FaBackward } from "react-icons/fa";
import notFoundImage from "../../assets/images/notfound.png"
import "./Product_Details.css";

export function Product_Details() {
  const [productId, setProductId] = useState({});
  const { products } = useContext(productList);
  const { id } = useParams();

  useEffect(() => {
    let newProduct = products.find(item => item.id == id);
    if (newProduct) {
      setProductId(newProduct);
    }
  }, [id, products]);

  const { title, description, price, stock, category, brand, thumbnail } = productId;

  return (
    <div className="Product-Details">
      <Container>
        <h1 className="header-section text-center py-3 border-bottom w-50 mx-auto">
            Product Details ID : {id}
        </h1>
        <div className="Product-Details__content py-4">
          <Row>
            <Col lg={6} className="mb-4">
              <div className="Product-Details__content__info">
                <h1 className="text-center">
                 <strong className="text-secondary">Brand:</strong> {brand}
                </h1>
                <h2><strong className="text-danger">Title:</strong> {title}</h2>
                <h3><strong className="text-danger">Category: </strong>
                  {category ?? title}
                </h3>
                <p className="fw-bold mb-1">
                  <strong className="text-danger">Description: </strong>
                  {description}
                </p>
                <h6 className="fw-bold">
                <h5 className="fw-bold text-success"><strong className="text-danger">Price: </strong>{price}$</h5>
                  <strong className="text-danger">Quantity: </strong>
                  {stock}
                </h6>
              </div>
            </Col>
            <Col lg={6}>
              <div className="Product-Details__content__image w-100">
                <img className="w-100" src={thumbnail || notFoundImage} alt="" />
              </div>
            </Col>
          </Row>
            <NavLink className="btn btn-success" to={"/products"}><FaBackward className=" text-danger"/> Back To Products</NavLink>
        </div>
      </Container>      
    </div>
  );
}