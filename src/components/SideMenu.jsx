import React from "react";
import '../styles/sideMenu.css';
import { useNavigate } from "react-router-dom";

export default function SideMenu() {
    const navigate = useNavigate();

    const urlToHome = () => {
        navigate("/");
    }

    const urltoProducs = () => {
        navigate("products");
    }

    const urlToUsers = () => {
        navigate("users");
    }

    return (
        <div className="sidemenu">
            SIDEMENU
            <div className="btns">
                <button onClick={urlToHome}>HOME</button>
                <button onClick={urltoProducs}>PRODUCTS</button>
                <button onClick={urlToUsers}>USERS</button>
            </div>
        </div>
    );
}