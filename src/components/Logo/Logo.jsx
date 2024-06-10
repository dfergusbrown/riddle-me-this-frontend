import React from "react";
import "./logo.css";

const Logo = ({ newClassName }) => {
  return (
    <img
      src="/extracted-logo.png"
      alt="Logo"
      className={newClassName}
      // style={{
      //   filter:
      //     "invert() invert(82%) sepia(27%) saturate(800%) hue-rotate(350deg) brightness(105%) contrast(88%);",
      // }}
    />
  );
};

export default Logo;
