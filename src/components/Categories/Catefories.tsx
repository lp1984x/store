import React from "react";
import { Nav } from "react-bootstrap";
import { sort } from "../../store/features/sortSlice";
import { useAppDispatch } from "../../store/store";
import { useFetchData } from "../../api/fetch";
import { setCurrent } from "../../store/features/pageSlice";

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
          onClick={() => dispatch(sort(""))}
          eventKey="all"
        >
          All
        </Nav.Link>
      </Nav.Item>
      {cat.map((categorie, i) => (
        <Nav.Item key={i}>
          <Nav.Link
            className="link-secondary"
            onClick={() => {
              dispatch(sort("/category/" + categorie));
              dispatch(setCurrent(1));
            }}
            eventKey={categorie}
          >
            {categorie}{" "}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}
