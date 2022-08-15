import React from "react";
import { v4 as uuidv4 } from "uuid";

const Rating = ({ value, color }) => {
  return (
    <div>
      <div className="rating m-2">
        {[1, 2, 3, 4, 5].map((rate) => (
          <span key={uuidv4()}>
            <i
              style={{ color }}
              className={
                value + 1 === rate + 0.5
                  ? "fas fa-star-half-alt"
                  : value >= rate
                  ? "fas fa-star"
                  : "far fa-star"
              }
            ></i>
          </span>
        ))}
      </div>
    </div>
  );
};

Rating.defaultProps = {
  color: "#FFA41C",
};

export default Rating;
