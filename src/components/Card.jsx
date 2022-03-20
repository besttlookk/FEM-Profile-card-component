import React from "react";
import heroImage from "../images/bg-pattern-card.svg";
import Avatar from "./Avatar";
import Detail from "./Detail";

const data = [
  {
    number: "80K",
    type: "Followers",
  },
  {
    number: "803K",
    type: "Likes",
  },
  {
    number: "1.4K",
    type: "Photos",
  },
];

const Card = () => {
  return (
    <div className="card">
      <div className="card__hero">
        <img src={heroImage} alt="hero" />
      </div>
      <div className="card__main">
        <div className="card__avatar">
          <Avatar />
        </div>

        <div>
          <p>
            <span className="card__name">Victor Crest</span>{" "}
            <span className="card__age">26</span>
          </p>
          <p className="card__place">London</p>
        </div>
      </div>

      {/*  */}
      <div className="card__footer">
        {data.map((item) => (
          <Detail key={item.type} detail={item} />
        ))}
      </div>
    </div>
  );
};

export default Card;
