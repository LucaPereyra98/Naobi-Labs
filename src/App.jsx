import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Error404 from "./components/Error404/Error404";
import ItemListContainer from "./components/Items/ItemListContainer";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import CartContextProvider from "./components/Context/CartContext";
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Cart/Checkout";
import Felicitaciones from "./components/Cart/Felicitaciones";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div>
          <Navbar/>
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
            <Route path={"*"} element={<Error404 />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/felicitaciones/:orderId"} element={<Felicitaciones />} />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
