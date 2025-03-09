import MainHeader from "./main-header";
import TopBar from "./top-bar";

const Header = () => {
  return (
    <header className="sticky -top-[3rem] z-50 shadow-md">
      <TopBar />
      <MainHeader />
    </header>
  );
};

export default Header;
