import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-[#1313130D] rounded-2xl min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co.com/9TtKdJk/pngwing-1.png"
            className="max-w-sm "
          />
          <div>
            <h1 className="text-5xl font-bold play-font">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn bg-[#23BE0A] my-7">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
