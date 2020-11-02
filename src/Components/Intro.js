import React from "react";

function Intro() {
  return (
    <section id="intro" className="clearfix">
      <div className="container">
        <div className="intro-img">
          {/* <img
                id="intro-img-1"
                src="assets/img/smarthome_large.png"
                alt="intro"
              /> */}
        </div>
        <div className="intro-info">
          <h2>Buy and Sell Domains Safely by DomChain!</h2>
          <p>a platform based on the blockchain for trading domains</p>
          <div>
            {/* <button className="btn-get-started animated infinite pulse">
              Order Now!
            </button> */}
            <button className="btn-services">Start Trading</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
