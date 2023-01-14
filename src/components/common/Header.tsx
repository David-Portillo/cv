import React from "react";
import BrandingLogo from "../../styles/assets/images/branding.svg";

const Header = (): JSX.Element => {
  return (
    <header className='header'>
      <div className='branding text'>
        <img src={BrandingLogo} alt='portfolio branding logo' />
      </div>
    </header>
  );
};

export default Header;
