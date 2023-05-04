import { useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useFetchData } from "../../api/fetch";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Product from "../Product/Product";
import Pagination from "@mui/material/Pagination";
import { setCurrent } from "../../store/features/pageSlice";

export default function Products() {
  const dispatch = useAppDispatch();
  const current = useAppSelector((state) => state.page.current);
  const [perPage] = useState(6);
  const { loading, prod } = useFetchData();
  const lastIndex = current * perPage;
  const firstIndex = lastIndex - perPage;
  const currentProds = prod.slice(firstIndex, lastIndex);
  const total = Math.ceil(prod.length / perPage);

  const onChangePage = (event: React.ChangeEvent<unknown>, page: number) =>
    dispatch(setCurrent(page));

  return (
    <>
      <Container className="d-flex flex-wrap justify-content-center p-0 col-sm-12 col-lg-10">
        {loading && <Spinner animation="border" />}
        {currentProds.map((item) => (
          <Product prd={item} key={item.id} />
        ))}
        <Container className="d-flex justify-content-center my-5">
          {perPage < prod.length && (
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
