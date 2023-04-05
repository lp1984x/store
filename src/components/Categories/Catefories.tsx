import React from "react";
import { Nav } from "react-bootstrap";
import { addCat } from "../../store/features/catSlice";
import { useAppDispatch } from "../../store/store";
import { useFetchData } from "../../api/fetch";

export default function Catefories() {
  const { cat } = useFetchData();
  const dispatch = useAppDispatch();
  return (
    <Nav
      defaultActiveKey="all"
      className="flex-column d-none d-lg-inline-block"
      variant="tabs"
    >
      <h5 className="text-center ">Categories</h5>
      <Nav.Item>
        <Nav.Link
          className="link-secondary"
          onClick={() => dispatch(addCat({ category: "" }))}
          eventKey="all"
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
