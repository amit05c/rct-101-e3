import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = () => {
  // Note: this id should come from api
  const {cart,setCart}=useContext(CartContext)
  const [prods,setProds] =useState([])

  const handleClick = ()=>{
    setCart(cart+1)
  }



  useEffect(()=>{
    fetch("http://localhost:8080/products")
    .then(res=>res.json())
    .then(data=>setProds(data))
  },[])
  console.log(prods)

  // const product = { id: 1 };
  return (
    <>
    {prods.map((product)=>(
        <div key={product.id}>
        <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={handleClick}>add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {
            cart
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">0</button>
        <button data-cy="product-remove-cart-item-button">0</button>
      </div>
    </div>
    </div>
    ))}
    
    </>
  );
};

export default Product;
