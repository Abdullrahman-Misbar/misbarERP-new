import MenuAccount from "../MenuAccount";

const NavBar = () => {
  return (
    <div
      className="flex items-center justify-end w-full bg-white shadow-md h-14 px-14"
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
