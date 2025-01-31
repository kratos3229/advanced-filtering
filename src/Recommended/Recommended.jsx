import React from "react";
import "./Recommended.css";

const Recommended = ({ handleButtonClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <button onClick={handleButtonClick} className="btns" value="">
            All Products
          </button>
          <button onClick={handleButtonClick} className="btns" value="Nike">
            Nike
          </button>
          <button onClick={handleButtonClick} className="btns" value="Adidas">
            Adidas
          </button>
          <button onClick={handleButtonClick} className="btns" value="Puma">
            Puma
          </button>
          <button onClick={handleButtonClick} className="btns" value="Vans">
            Vans
          </button>
        </div>
      </div>
    </>
  );
};

export default Recommended;
