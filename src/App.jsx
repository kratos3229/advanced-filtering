import { useState } from "react";
import "./index.css";
import Navigation from "./Navigation/Nav.jsx";
import Products from "./Products/Products.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Category from "./Sidebar/Category/Category.jsx";
import Colors from "./Sidebar/Colors/Colors.jsx";
import Price from "./Sidebar/Price/Price.jsx";
import Size from "./Sidebar/Size/Size.jsx";

const App = () => {
  return (
    <>
      <Navigation />
      <Products />
      <Recommended />
      <Category />
      <Colors />
      <Price />
      <Size />
    </>
  );
};

export default App;
