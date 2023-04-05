import { useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useFetchData } from "../../api/fetch";
import { useAppSelector } from "../../store/store";
import Product from "../Product/Product";
import Pagination from "@mui/material/Pagination";

export default function Products() {
  const [current, setCurrent] = useState(1);
  const [perPage] = useState(6);
  const { loading, prod } = useFetchData();
  const catF = useAppSelector((state) => state.cat.catValue);
  const prodCat =
    catF.trim().length > 0
      ? prod.filter((item) => item.category === catF)
      : prod;
  const lastIndex = current * perPage;
  const firstIndex = lastIndex - perPage;
  const currentProds = prodCat.slice(firstIndex, lastIndex);
  const total = Math.ceil(prodCat.length / perPage);

  const onChangePage = (event: React.ChangeEvent<unknown>, page: number) =>
    setCurrent(page);

  return (
    <>
      <Container className="d-flex flex-wrap justify-content-center p-0 col-sm-12 col-lg-10">
        {loading && <Spinner animation="border" />}
        {currentProds.map((item) => (
          <Product prd={item} key={item.id} />
        ))}
        <Container className="d-flex justify-content-center my-5">
          {perPage < prodCat.length && (
            <Pagination
              size="small"
              count={total}
              page={current}
              onChange={onChangePage}
              shape="rounded"
            />
          )}
        </Container>
      </Container>
    </>
  );
}
