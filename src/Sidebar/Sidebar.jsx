import React from "react";
import "./Sidebar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import Size from "./Size/Size";

const Sidebar = ({ handleRadioChange }) => {
  console.log(handleRadioChange);

  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            <AiOutlineShoppingCart />
          </h1>
        </div>
        <Category handleRadioChange={handleRadioChange} />
        <Price handleRadioChange={handleRadioChange} />
        <Colors handleRadioChange={handleRadioChange} />
      </section>
    </>
  );
};

export default Sidebar;
