import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <ItemListContainer greeting={"Como no tengo ganas de poner una imagen decidi simplemente poner un H1 y un lorem para rellenar texto. CSS y Bootstrap no son mi fuerte pero lo intento :)"} ></ItemListContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
