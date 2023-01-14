import React from "react";
import GithubLogo from "../../styles/assets/images/github-icon.svg";
import LinkedInLogo from "../../styles/assets/images/linkedin-icon.svg";

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className='copyright faded-text'>
        &#169; copyright {new Date().getFullYear()}
      </div>
      <div className='contact faded-text'>david.portillo92@live.com</div>
      <div className='social'>
        <img src={GithubLogo} alt='github logo' />
        <img src={LinkedInLogo} alt='linkedin logo' />
      </div>
    </footer>
  );
};

export default Footer;
