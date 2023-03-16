import React from "react";
import { Link } from "react-router-dom";
import LandingImage from "../assets/images/LandingImage.svg";
import { Logo } from "../components";

const LandingPage = () => {
  return (
    <main>
      <div className="mx-auto my-4">
        <nav className="flex mx-4 sm:mx-6 md:mx-8 items-center">
          <Logo />
        </nav>
        <div
          className="min-h-screen flex justify-center items-center max-w-full"
          style={{ gridTemplateRows: "calc(var(--nav-height) + 3rem) 1fr" }}
        >
          <div className="mx-4 sm:mx-6 md:mx-8 flex justify-center items-center md:items-start flex-col mb-14">
            <h1 className="font-bold text-3xl text-center md:text-left">
              App for<span className="text-[#abd699]"> Tracking</span> Job Apps
            </h1>
            <p className="text-[#777777] mt-4 text-center md:text-left">
          Welcome to our job tracking app! We know how overwhelming job applications can be, so we created a tool to help you stay organized and focused on your job search.  Whether you're a seasoned job seeker or just starting out, our app will help you stay on top of your game and land your dream job. Try it out today and take the first step towards your new career!




            </p>
            <Link
              to="/register"
              className="btn btn-hero mt-4 bg-[#ffe26a] hover:bg-[#f7d13c] text-white rounded-md"
            >
              Login/Register
            </Link>
          </div>
          <img
            src={LandingImage}
            alt="job search"
            className="w-full  object-cover hidden md:block"
          />
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
