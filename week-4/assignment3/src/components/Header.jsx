import Nav from "./Nav";
import MenuButton from "./MenuButton";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h3>Title/logo</h3>
        <Nav />
        <MenuButton />
      </div>
    </header>
  );
};

export default Header;
