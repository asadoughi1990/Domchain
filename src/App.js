import React from "react";
import "bootstrap";
import "./assets/css/default.css";
import "./assets/css/demo.css";
import "./assets/css/ionicons.min.css";

import NavBarSite from "./Component/NavBarSite";
import Features from "./Component/Features";
import Services from "./Component/Services";
import Started from "./Component/Started";
import Pricing from "./Component/Pricing";
import Team from './Component/Team';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

function App() {
  return (
    <React.Fragment>
      <NavBarSite />
      <Features />
      <Services />
      <Started />
      <Pricing />
      <Team />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
