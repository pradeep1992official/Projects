import { useState } from "react";
import CartModal from "./Components/CartModal";
import NavBar from "./Components/NavBar";
import ProductList from "./Components/ProductList";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    isCartOpen ? setIsCartOpen(false) :  setIsCartOpen(true);
  };

  const removeItem = (itemsID) => {
    setCartItems(cartItems.filter((product) => product.id !== itemsID));
    
  }
  return (
    <div className="bg-gray-200 min-h-screen">
      <NavBar toggleCart={toggleCart} cartCount={cartItems.length}></NavBar>
      <ProductList cartItems={cartItems} setCartItems={setCartItems}></ProductList>

      {isCartOpen && (
        <CartModal cartItems={cartItems} toggleCart={toggleCart} removeItem={removeItem}></CartModal>
      )}
    </div>
  );
}

export default App;
