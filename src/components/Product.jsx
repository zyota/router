import React from "react";
import axios from "axios";
import "../styles/product.css";
export default function Product(prop) {
  const { data } = prop;
  console.log("product: ", prop);
  return (
    <div className="product">
      <div className="product-image">
        <img src={data.image} alt="img" />
      </div>
      <div className="product-mid">
        <h2>{data.name}</h2>
        <p>price: {data.price}</p>
        <p>stock: {data.stock}</p>
        <p>category: {data.category}</p>
      </div>
    </div>
  );
}
