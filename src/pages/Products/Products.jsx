import { useContext } from "react";
import { Container, Table } from "react-bootstrap";
import { productList } from "../../context/productsContext";
import { Product } from "../../components/Product/Product";

export function Products() {
  const { products, setProducts } = useContext( productList )

  
  return (
    <div className="products overflow-x-auto">
      <Container>
        <h1 className="header-section text-center py-3 border-bottom w-50 mx-auto">
            Our Products
        </h1>
        <div className="products__content py-4">
          <Table striped bordered hover>
            <thead>
              <tr className="text-center">
                <th>#ID</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <Product products={products} setProducts={setProducts}/>
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  )
}
