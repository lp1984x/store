import { Container } from "react-bootstrap";
import Products from "../Products/Products";

export default function Home() {
  return (
    <Container className="d-flex flex-wrap  col-10">
      <Products />
    </Container>
  );
}
