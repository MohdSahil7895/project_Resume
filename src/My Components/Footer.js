import React from "react";

export const Footer = () => {
  let footerStyle = {
    // position: "bottom",
    // display: "inline-block",
    // left: "0",
    // bottom: "0",
    // right: "0",
    clear: "both",
    position: "relative",
    height: "50px",
    margintop: "-50",
  };

  return (
    <footer  style={footerStyle}>
      <p className="text-center">Copyright &copy; ReactApp.com</p>
    </footer>
  );
};
// className="container p-3  bg-dark text-white"