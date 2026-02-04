import React from "react";

function CartModal({ cartItems, toggleCart, removeItem }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-80 shadow-xl">
        <h2 className="text-indigo-600 text-xl font-bold mb-4">Your Cart</h2>
        <hr className="mb-2"></hr>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((items) => (
              <div key={items.id} className="flex text-center justify-between mb-2">
                <img src={items.image} className="h-12 w-12 "></img>
                <div className="text-gray-700">{items.title}</div>
                
                <button onClick={()=>removeItem(items.id)}className="text-red-500 hover:underline">Remove</button>
    
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-60 mt-2">Your Cart is Empty</p>
        )}
        <button
          onClick={toggleCart}
          className="bg-indigo-500 font-semibold text-white w-full py-2 rounded-full mt-4 hover:bg-indigo-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default CartModal;
