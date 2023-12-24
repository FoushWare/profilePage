import React, { useState } from "react";
import { ReactSVG } from "react-svg";

const LanguageSwitcher = ({ classes }: { classes?: string }) => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [direction, setDirection] = useState("ltr");

  const toggleDropdown = () => setOpen(!open);

  const switchLanguage = (lang: string) => {
    setLanguage(lang);
    setDirection(lang === "en" ? "ltr" : "rtl");
    setOpen(false);
  };

  const languageSwitcherClasses = `relative mx-5 ${classes}`;

  return (
    <div className={languageSwitcherClasses}>
      <button onClick={toggleDropdown} className="flex items-center space-x-2">
        <ReactSVG src="/icons/global.svg" />
        <span className="hidden md:block">|</span>
        <span>{language.toUpperCase()}</span>
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              onClick={() => switchLanguage("en")}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex w-full"
              role="menuitem"
            >
              EN
            </button>
            <button
              onClick={() => switchLanguage("ar")}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex w-full"
              role="menuitem"
            >
              العربيه
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
