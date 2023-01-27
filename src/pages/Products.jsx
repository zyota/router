import React from "react";
import "../styles/products.css";

export default function Products() {
  const [products, setProducts] = useState("");
  useEffect(() => {
    axios("http://localhost:2020/products").then((data) =>
      setProducts(data.data)
    );
  }, []);
  console.log("Home Products: ", products);
  return (
    <div className="products">{products && <Product data={products[0]} />}</div>
  );
}
