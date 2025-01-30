import React from "react";
import "./Sidebar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import Size from "./Size/Size";

const Sidebar = () => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            <AiOutlineShoppingCart />
          </h1>
        </div>
        <Category />
        <Price />
        <Colors />
        <Size />
      </section>
    </>
  );
};

export default Sidebar;
