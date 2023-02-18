import React from "react";
import JobJotLogo2 from "../assets/images/JobJotLogo2.svg";
import LandingImage from "../assets/images/LandingImage.svg";

const LandingPage = () => {
  return (
    <main>
      <nav className="w-var(--fluid-width) max-w-var(--max-width) mx-auto h-var(--nav-height) flex items-center">
        <img src={JobJotLogo2} alt="JobJot Logo" className="logo" />
      </nav>
      <div className="container min-h-screen grid items-center md:grid grid-cols-2 gap-x-3rem" style={{ gridTemplateRows: 'calc(var(--nav-height) + 3rem) 1fr' }}>
        <div className="info">
          <h1 className="font-bold">
            App for<span className='text-[#abd699]'> tracking</span> Job apps
          </h1>
          <p className="text-[#777777]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore quas doloremque tempora dolores vitae eos architecto dolor aliquam laudantium, molestiae totam sed unde voluptatem magnam ea at iste rerum?</p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={LandingImage} alt="job search" className=" w-full object-cover hidden md:block"/>
      </div>
    </main>
  );
};

export default LandingPage;