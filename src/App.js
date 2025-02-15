import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
