import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function ProductList({ cartItems, setCartItems }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    if (cartItems.find((items) => items.id === product.id)) {
      alert("Product already in Cart");
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div
          className="border border-gray-300 p-4 rounded-lg shadow-lg bg-white"
          key={product.id}
        >
          <img src={product.image} className="h-40 mx-auto mb-4"></img>
          <p className="text-lg font-semibold text-gray-700">{product.title}</p>
          <p className="text-lg font-bold text-red-600">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-green-500 py-2 text-white w-full my-2 rounded-full hover:bg-green-700 cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
