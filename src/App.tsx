import { useFetchData } from "./api/fetchData";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
