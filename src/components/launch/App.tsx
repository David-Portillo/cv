import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Introduction from "../sections/Introduction";

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <Introduction />
      <Footer />
    </React.Fragment>
  );
};

export default App;
