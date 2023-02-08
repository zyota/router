import { Route, Routes } from "react-router-dom";
import { MENUS } from "./util/data";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Users from "./pages/Users";
import { useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <SideMenu />
        <Routes>
          <Route path={MENUS[0].url} element={<Home />} />
          <Route path={MENUS[1].url} element={<Products />} />
          <Route path={MENUS[2].url} element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
