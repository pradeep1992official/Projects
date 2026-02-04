import React from "react";

function NavBar({toggleCart, cartCount}) {
  return (
    <div className="p-4 bg-indigo-500 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">DTH Tamizhan Shopping Corner</h1>
      <button onClick={toggleCart} className="bg-yellow-400 px-4 py-2 rounded-full text-black font-bold">
        Cart <span className="bg-black px-1 text-yellow-500 font-bold text-xs rounded-full">{cartCount} </span>
      </button>
    </div>
  );
}

export default NavBar;
