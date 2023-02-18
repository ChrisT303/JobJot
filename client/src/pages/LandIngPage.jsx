import React from "react";
import JobJotLogo2 from "../assets/images/JobJotLogo2.svg";
import LandingImage from "../assets/images/LandingImage.svg";

const LandingPage = () => {
  return (
<main>
  <div class=" mx-auto  my-4">
    <nav className="flex mx-4 sm:mx-6 md:mx-8 items-center">
      <img src={JobJotLogo2} alt="JobJot Logo" className="logo" />
    </nav>
    <div className="min-h-screen flex justify-center items-center max-w-full" style={{ gridTemplateRows: 'calc(var(--nav-height) + 3rem) 1fr' }}>
      <div className="mx-4 sm:mx-6 md:mx-8 flex justify-center items-center md:items-start flex-col mb-14">
        <h1 className="font-bold text-3xl text-center md:text-left">
          App for<span className='text-[#abd699]'> Tracking</span> Job Apps
        </h1>
        <p className="text-[#777777] mt-4 text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore quas doloremque tempora dolores vitae eos architecto dolor aliquam laudantium, molestiae totam sed unde voluptatem magnam ea at iste rerum?</p>
        <button className="btn btn-hero mt-4 bg-[#ffe26a] hover:bg-[#f7d13c] text-white rounded-md">Login/Register</button>
      </div>
      <img src={LandingImage} alt="job search" className="w-full  object-cover hidden md:block"/>
    </div>
  </div>
</main>

  );
};

export default LandingPage;







