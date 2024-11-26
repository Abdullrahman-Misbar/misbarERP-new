import React from "react";
import MenuAccount from "../MenuAccoutn";

const NavBar = () => {
  return (
    <div
      className="w-full flex h-14 items-center justify-end px-14 bg-white shadow-md"
      style={{
        position: "relative",
        boxShadow: "-5px 0px 1px #000000bf",
      }}
    >
      <MenuAccount />
    </div>
  );
};

export default NavBar;
