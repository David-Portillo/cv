import React from "react";

import profile from "../../assets/images/photo-alt.svg";

const Introduction = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className='photo-grid-area'>
        <div className='photo'>
          <img src={profile} alt='profile image' />
        </div>
        <div className='assortment'>
          <div>ICON</div>
          <div>ICON</div>
          <div>ICON</div>
        </div>
      </div>
      <div className='intro-grid-area'>
        <h2 className='paragraph-title'>Hi There!</h2>
        <p className='faded-paragraph'>
          I'm <span>David Portillo</span>, a software developer. Welcome to my
          software development portfolio! I'm a highly motivated and experienced
          developer with a passion for creating innovative and efficient
          solutions.
        </p>
        <p className='faded-paragraph'>
          With a strong background in various programming languages and
          technologies, I've worked on a wide range of projects, from web
          development to backend and more. I'm excited to share my skills and
          experience with you and look forward to the opportunity to work on
          exciting new projects together. Thank you for visiting my portfolio!
        </p>
      </div>
    </React.Fragment>
  );
};

export default Introduction;
