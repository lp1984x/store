import { useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useFetchData } from "../../api/fetch";
import { useAppSelector } from "../../store/store";
import Pagi from "../Pagi/Pagi";
import Product from "../Product/Product";

export default function Products() {
  const catF = useAppSelector((state) => state.cat.value);
  const [current, setCurrent] = useState(1);
  const [perPage] = useState(6);
  const { loading, prod } = useFetchData();
  const prodCat =
    catF.trim().length > 0
      ? prod.filter((item) => item.category === catF)
      : prod;
  const lastIndex = current * perPage;
  const firstIndex = lastIndex - perPage;
  const currentProds = prodCat.slice(firstIndex, lastIndex);
  const total = Math.ceil(prodCat.length / perPage);

  const onChangePage = (page: number) => setCurrent(page);

  return (
    <>
      <Container className="d-flex flex-wrap justify-content-center p-0 col-10">
        {loading && <Spinner animation="border" />}
        {currentProds.map((item) => (
          <Product prd={item} key={item.id} />
        ))}

        {perPage < prodCat.length && (
          <Pagi total={total} current={current} onChangePage={onChangePage} />
        )}
      </Container>
    </>
  );
}
