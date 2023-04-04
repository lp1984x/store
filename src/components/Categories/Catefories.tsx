import React from "react";
import { Nav } from "react-bootstrap";
import { addCat } from "../../store/features/catSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useFetchData } from "../../api/fetch";

export default function Catefories() {
  const { cat } = useFetchData();
  const catF = useAppSelector((state) => state.cat.catValue);
  const dispatch = useAppDispatch();
  return (
    <Nav
      defaultActiveKey={catF}
      className="flex-lg-column d-none d-lg-inline-block"
      variant="tabs"
    >
      <h5 className="text-center ">Categories</h5>
      <Nav.Item>
        <Nav.Link
          className="link-secondary"
          onClick={() => dispatch(addCat({ category: "" }))}
          eventKey=""
        >
          All
        </Nav.Link>
      </Nav.Item>
      {cat.map((categorie, i) => (
        <Nav.Item key={i}>
          <Nav.Link
            className="link-secondary"
            onClick={() => dispatch(addCat({ category: categorie }))}
            eventKey={categorie}
          >
            {categorie}{" "}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}
