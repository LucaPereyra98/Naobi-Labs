import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Error404 from "./components/Error404/Error404";
import ItemListContainer from "./components/Items/ItemListContainer";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import Home from "./components/pages/Home"
import SobreNosotros from "./components/pages/SobreNosotros"
import Contacto from "./components/pages/Contacto"
import CartContextProvider from "./components/Context/CartContext";
import Cart from "./components/Cart/Cart"

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div>
          <Navbar/>
          <Routes>
            <Route path={"/"} element={<ItemListContainer />}/>
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
            <Route path={"/home"} element={<Home />} />
            <Route path={"/sobreNosotros"} element={<SobreNosotros />} />
            <Route path={"/contacto"} element={<Contacto />} />
            <Route path={"*"} element={<Error404 />} />
            <Route path={"/cart"} element={<Cart />}/>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
