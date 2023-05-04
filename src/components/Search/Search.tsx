import { useState } from "react";
import { Form } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useAppDispatch } from "../../store/store";
import { sort } from "../../store/features/sortSlice";

export default function Search() {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");

  const searchFunction = () => {
    if (search.trim().length) {
      dispatch(sort("/search?q=" + search));
      setSearch("");
    } else {
      dispatch(sort(""));
    }
  };
  return (
    <Form className="d-flex align-items-center">
      <Form.Control
        size="sm"
        //type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <IconButton onClick={searchFunction}>
        <SearchIcon />
      </IconButton>
    </Form>
  );
}
