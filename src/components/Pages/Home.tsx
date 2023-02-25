import React from "react";
import { Container, Spinner } from "react-bootstrap";
import { useFetchData } from "../../api/fetchData";
import Products from "../Products/Products";

export default function Home() {
  const { loading, prod } = useFetchData();
  loading ? console.log("loading") : console.log(prod?.products);
  return (
    <Container className="d-flex flex-wrap ">
      {loading && <Spinner animation="border" />}
      {prod?.products.map((item) => (
        <Products prod={item} key={item.id} />
      ))}
    </Container>
  );
}
