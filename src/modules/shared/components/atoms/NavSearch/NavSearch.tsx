import React, { useState, useRef, useEffect } from "react";
import { ReactSVG } from "react-svg";

const NavSearch: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  return (
    <div className="flex items-center justify-end">
      {showSearch && (
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          className="focus:outline-none focus:border-transparent rounded-full py-1 px-3 bg-gray-200 border-gradient border-red-orange border-1 mr-1 w-3/4 md:w-auto"
        />
      )}
      <ReactSVG
        src="/icons/search.svg"
        onClick={handleClick}
        className="hover:cursor-pointer"
      />
    </div>
  );
};

export default NavSearch;
