import React from "react";
import JobJotLogo2 from "../assets/images/JobJotLogo2.svg";
import LandingImage from "../assets/images/LandingImage.svg";

const LandingPage = () => {
  return (
    <main>
      <nav>
        <img src={JobJotLogo2} alt="JobJot Logo" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            App <span>for tracking</span> Job apps
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore quas doloremque tempora dolores vitae eos architecto dolor aliquam laudantium, molestiae totam sed unde voluptatem magnam ea at iste rerum?</p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={LandingImage} alt="job search" className="img main-img"/>
      </div>
    </main>
  );
};

export default LandingPage;
