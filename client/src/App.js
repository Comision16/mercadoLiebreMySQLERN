import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { ProductDetail } from "./pages/ProductDetail";
import { Register } from "./pages/Register";

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
     {/*  <Login/> */}
     {/* <Register/> */}
     <ProductDetail/>
      <Footer />
    </>
  );
}

export default App;
