import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";
import "../styles/products.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Products() {
  const [products, setProducts] = useState("");
  useEffect(() => {
    axios("http://localhost:2020/products").then((data) =>
      setProducts(data.data)
    );
  }, []);
  console.log("Home Products: ", products);
  return (
    <div className="products">
      <div>
        <button>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>image</th>
            <th>image</th>
            <th>image</th>
            <th>image</th>
            <th>image</th>
            <th>image</th>
            <th>image</th>
          </tr>
        </thead>
        <tbody>
          {products
            ? products.map((product, index) => {
                return (
                  <tr className="product" key={index}>
                    <td>
                      {" "}
                      <img src={product.image} alt="img" />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>{product.category}</td>
                    <td>{product.sale}</td>
                    <td>
                      <button>Засах</button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}
