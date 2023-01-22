import React from "react";

const Introduction = (): JSX.Element => {
  return (
    <React.Fragment>
      {/* TODO: remove style when image is ready, re-utilize properies is scss if necessary */}
      <div className='photo-grid-area'>
        <div className='photo'>IMAGE</div>
        <div className='assortment'>
          <div>ICON</div>
          <div>ICON</div>
          <div>ICON</div>
        </div>
      </div>
      <div className='intro-grid-area'>
        <h2 className='paragraph-title'>Hi There!!!</h2>
        <p className='faded-paragraph'>
          Welcome to my software development portfolio! I am a highly motivated
          and experienced developer with a passion for creating innovative and
          efficient solutions. I have a strong background in various programming
          languages and technologies, and have worked on a wide range of
          projects, from web development to backend and more. I am excited to
          share my skills and experience with you and look forward to the
          opportunity to work on exciting new projects. Thank you for visiting
          my portfolio!
        </p>
      </div>
    </React.Fragment>
  );
};

export default Introduction;
