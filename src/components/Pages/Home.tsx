import { useState } from "react";
import { Container } from "react-bootstrap";
import { useFetchData } from "../../api/fetchData";
import Pagi from "../Pagi/Pagi";
import Products from "../Products/Products";

export default function Home() {
  const [current, setCurrent] = useState(1);
  const [perPage] = useState(5);

  const { loading, prod } = useFetchData();
  loading ? console.log("loading") : console.log(prod);

  const lastIndex = current * perPage;
  const firstIndex = lastIndex - perPage;
  const currentProds = prod?.products.slice(firstIndex, lastIndex);
  const total = Math.ceil(prod?.products.length / perPage);

  const onChangePage = (page: number) => setCurrent(page);

  return (
    <Container className="d-flex flex-wrap ">
      <Products loading={loading} prod={currentProds} />
      {perPage < prod?.products.length && (
        <Pagi total={total} current={current} onChangePage={onChangePage} />
      )}
    </Container>
  );
}
