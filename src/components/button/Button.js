import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import "./button.scss";

const Button = ({
  clickHandler,
  btnText,
  arrRight = false,
  leftRight = false,
  className='button',
  isActive
}) => {
  return (
    <div className="btn-container">
      <button onClick={clickHandler} className={className}>
        {leftRight && (
          <span>
            <BsArrowLeftShort />
          </span>
        )}
        {isActive ? "Get another User" : btnText}
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
