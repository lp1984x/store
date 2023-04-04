import { Container } from "react-bootstrap";
import Catefories from "../Categories/Catefories";
import Products from "../Products/Products";

export default function Home() {
  return (
    <Container className="d-flex flex-wrap">
      <Catefories />
      <Products />
    </Container>
  );
}
