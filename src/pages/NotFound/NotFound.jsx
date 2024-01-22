import { Container } from "react-bootstrap";

export function NotFound() {
  return (
    <div className=" bg-danger-subtle">
      <Container>
        <div style={{height: `calc(100vh - 56px)`}} className="d-flex justify-content-center align-items-center">
            <h1 className="text-danger">404 This Page Not Found !!!</h1>
        </div>
      </Container>
    </div>
  )
}
