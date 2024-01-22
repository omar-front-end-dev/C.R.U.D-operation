import { Container } from "react-bootstrap";
import './Home.css'
import { NavLink } from "react-router-dom";
import { IoReturnUpForwardOutline } from "react-icons/io5";
export function Home() {
  return (
    <div className="Home-page bg-dark bg-gradient text-white">
      <Container>
        <div className="Home-page__content d-flex justify-content-center align-items-center flex-column">
        <h1 className="mb-4">C.R.U.D-operation</h1>
        <NavLink className="btn btn-dark fs-4 py-2 px-4" to={'/products'}>Go To Products List
        <span className="ms-3 text-info"><IoReturnUpForwardOutline/></span>
        </NavLink>
        
        </div>
      </Container>
    </div>
  )
}
