import React, { useState } from "react";
import "../styles/home.css";
import { useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";

export default function Home() {
  const [products, setProducts] = useState("");
  useEffect(() => {
    axios("http://localhost:2020/products").then((data) =>
      setProducts(data.data)
    );
  }, []);
  console.log("Home Products: ", products);
  return (
    <div className="home">{products && <Product data={products[0]} />}</div>
  );
}
