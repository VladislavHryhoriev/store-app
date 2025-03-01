import MainHeader from "./main-header";
import PreHeader from "./pre-header";

const Header = () => {
  return (
    <header className="sticky -top-[3rem] z-50 shadow-md">
      <PreHeader />
      <MainHeader />
    </header>
  );
};

export default Header;
