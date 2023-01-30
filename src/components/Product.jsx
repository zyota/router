import React from "react";
import axios from "axios";
import "../styles/product.css";
export default function Product(prop) {
  const { data } = prop;
  console.log("product: ", prop);

  return data.map((product) => {
    return (
      <tr className="product">
        <td>
          <img src={product.image} alt="img" />
        </td>
        <td>
          <h3>{product.name}</h3>
        </td>
        <td>
          <p>{product.price}</p>
        </td>
        <td>
          <p>{product.stock}</p>
        </td>
        <td>
          <p>{product.category}</p>
        </td>
        <td>
          <p> {product.sale}</p>
        </td>

        <button>Засах</button>
      </tr>
    );
  });
}
