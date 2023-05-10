import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import About from "./components/Pages/About";
import SinglPage from "./components/Pages/singlPage";
import Cart from "./components/Cart/Cart";
import Mdl from "./components/Mdl/Mdl";
import "./app.scss";

function App() {
  return (
    <main className="wrapper">
      <NavBar />
      <Header />
      <Container className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/single" element={<SinglPage />} />
        </Routes>
        <Cart />
        <Mdl />
      </Container>
      <Footer />
    </main>
  );
}

export default App;
