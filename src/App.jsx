import { useState } from "react";
import "./index.css";
import Navigation from "./Navigation/Nav.jsx";
import Products from "./Products/Products.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Card from "./components/Card.jsx";

//data
import productData from "./db/data.jsx";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //-----------input filter------------------
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = productData.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //-------------radio filter------------
  const handleRadioChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  //-------------buttons filter------------
  const handleButtonClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    //selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(productData, selectedCategory, query);

  return (
    <>
      <Sidebar handleRadioChange={handleRadioChange} />
      <Navigation handleInputChange={handleInputChange} query={query} />
      <Recommended handleButtonClick={handleButtonClick} />
      <Products result={result} />
    </>
  );
};

export default App;
