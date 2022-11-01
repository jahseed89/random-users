import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import "./button.scss";

const Button = ({ clickHandler, btnText, arrRight = false }) => {
  return (
    <div className="btn-container">
      <button onClick={clickHandler}>
        {btnText}{" "}
        {arrRight && (
          <span>
            <BiRightArrowAlt />
          </span>
        )}
      </button>
    </div>
  );
};
export default Button;
