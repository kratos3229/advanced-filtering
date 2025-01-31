import React from "react";
import "./Colors.css";
import Input from "../../components/Input";

const Colors = ({ handleRadioChange }) => {
  return (
    <div>
      <h2 className="sidebar-title colors-title">Colors</h2>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            onChange={handleRadioChange}
            value=""
            name="test1"
          />
          <span className="checkmark all"></span>All
        </label>
        <Input
          handleRadioChange={handleRadioChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />
        <Input
          handleRadioChange={handleRadioChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />
        <Input
          handleRadioChange={handleRadioChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />
        <Input
          handleRadioChange={handleRadioChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        <label className="sidebar-label-container">
          <input
            type="radio"
            onChange={handleRadioChange}
            value="white"
            name="test1"
            color=""
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </div>
  );
};

export default Colors;
