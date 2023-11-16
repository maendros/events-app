// components/Header.tsx

import SearchBox from "./SearchBox";
import TodayDateComponent from "./TodayDateComponent";

const Header: React.FC = () => {
  return (
    <header className="md:pt-10 pb-5 flex flex-col md:flex-row justify-between items-center md:items-start">
      <div className="mb-1 md:mb-4">
        <h3 className="text-3xl font-bold text-white">Hello, Megan</h3>
        <TodayDateComponent />
      </div>
      <SearchBox />
    </header>
  );
};

export default Header;
