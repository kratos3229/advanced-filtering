import { useState } from "react";
import "./index.css";
import Navigation from "./Navigation/Nav.jsx";
import Products from "./Products/Products.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Category from "./Sidebar/Category/Category.jsx";
import Colors from "./Sidebar/Colors/Colors.jsx";
import Price from "./Sidebar/Price/Price.jsx";
import Size from "./Sidebar/Size/Size.jsx";
<<<<<<< HEAD
import Sidebar from "./Sidebar/Sidebar.jsx";
=======
>>>>>>> f48fe5f3b5a0c6a4d9d79cd7b7175032e1330e0e

const App = () => {
  return (
    <>
<<<<<<< HEAD
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
=======
      <Navigation />
      <Products />
      <Recommended />
      <Category />
      <Colors />
      <Price />
      <Size />
>>>>>>> f48fe5f3b5a0c6a4d9d79cd7b7175032e1330e0e
    </>
  );
};

export default App;
