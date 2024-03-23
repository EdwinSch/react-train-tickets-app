import logo from "../assets/Metro.png";

const Header = () => {
  return (
    <header className="flex justify-center items-center gap-2">
      <img src={logo} alt="logo" className="w-11" />
      <h1 className="text-2xl uppercase font-black">city metro</h1>
    </header>
  );
};
export default Header;
