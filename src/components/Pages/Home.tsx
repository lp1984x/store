import { Container } from "react-bootstrap";
import { useFetchData } from "../../api/fetch";
import Catefories from "../Categories/Catefories";
import Products from "../Products/Products";

export default function Home() {
  const { cat } = useFetchData();
  return (
    <Container className="d-flex flex-wrap">
      <Catefories cat={cat} />
      <Products />
    </Container>
  );
}
