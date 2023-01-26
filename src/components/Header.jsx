import React from "react";
import "../styles/header.css";

export default function Header() {
  return (
    <div className="header">
      <img src={"logo.png"} alt="png" />
      <div className="input-btn">
        <input type="text" />
        <button>Search</button>
      </div>
      <img src={"logout.png"} alt="img" />
    </div>
  );
}
