import React from "react";

const Detail = ({ detail }) => {
  return (
    <div className="detail">
      <p className="detail__number">{detail.number}</p>
      <p className="detail__type">{detail.type}</p>
    </div>
  );
};

export default Detail;
