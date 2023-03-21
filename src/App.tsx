import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import SinglePage from "./components/Pages/SinglePage";
import { Route, Routes } from "react-router-dom";
import Catefories from "./components/Categories/Catefories";
import { useFetchData } from "./api/fetch";
import { Container } from "react-bootstrap";

function App() {
  const { cat } = useFetchData();

  return (
    <>
      <NavBar />
      <Header />
      <Container className="d-flex flex-wrap ">
        <Catefories cat={cat} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<SinglePage />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
