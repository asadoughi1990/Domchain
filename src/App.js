import React from "react";
import "bootstrap";
import "./assets/css/default.css";
import "./assets/css/demo.css";
import "./assets/css/ionicons.min.css";
import "./assets/lib/font-awesome/css/font-awesome.min.css";

import NavBarSite from "./Component/NavBarSite";
import About from "./Component/About";
import Features from "./Component/Features";
import Services from "./Component/Services";
import Video from "./Component/Video";
import FAQ from "./Component/FAQ";
import Team from './Component/Team';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

function App() {
  return (
    <React.Fragment>
      <NavBarSite />
      <About />
      <Features />
      <Services />
      <Video />
      <FAQ />
      <Team />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
