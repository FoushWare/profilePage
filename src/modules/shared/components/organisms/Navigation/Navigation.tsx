import { useState } from "react";
import DesktopNavigation from "@/modules/shared/components/molecules/DesktopNavigation";
import MobileNavigation from "@/modules/shared/components/molecules/MobileNavigation";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <DesktopNavigation
        isMenuOpen={isMenuOpen}
        handleMenuClick={handleMenuClick}
      />
      <MobileNavigation isMenuOpen={isMenuOpen} />
    </>
  );
};

export default Navigation;
