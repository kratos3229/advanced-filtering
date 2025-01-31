import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = () => {
  return (
    <div>
      <section className="card">
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="Shoe"
          className="card-img"
        />
        <div className="card-details">
          <h3 className="card-title">Shoe</h3>
          <section className="card-reviews">
            <AiFillStar className="rating-star" />
            <AiFillStar className="rating-star" />
            <AiFillStar className="rating-star" />
            <AiFillStar className="rating-star" />
            <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>$300</del>200
            </div>
            <div className="bag">
              <BsFillBagHeartFill />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Card;
