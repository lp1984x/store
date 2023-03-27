import { Container } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";

export default function Home() {
  return (
    <Container className="d-flex flex-wrap  col-10">
      <Products />
      <Cart />
    </Container>
  );
}
