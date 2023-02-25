import { Container, Spinner } from "react-bootstrap";
import { IProd } from "../../models";
import Product from "../Product/Product";

interface ProdProps {
  prod: IProd[];
  loading: boolean;
}

export default function Products({ prod, loading }: ProdProps) {
  return (
    <Container className="d-flex flex-wrap ">
      {loading && <Spinner animation="border" />}
      {prod.map((item) => (
        <Product prod={item} key={item.id} />
      ))}
    </Container>
  );
}
