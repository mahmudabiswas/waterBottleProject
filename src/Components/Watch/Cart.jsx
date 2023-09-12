import React from "react";
import PropTypes from "prop-types";
export const Cart = ({ card }) => {
  return (
    <>
      <h4>card: {card.length}</h4>

      {card.map((bottle) => (
        <img
          key={bottle.id}
          src={bottle.img}
          style={{ width: "100px", margin: "20px" }}
        />
      ))}
    </>
  );
};

// card.PropTypes = {
//   card: PropTypes.array.isRequired,
// };
