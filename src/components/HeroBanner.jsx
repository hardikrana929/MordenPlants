// src/components/HeroBanner.jsx
// HeroBanner.jsx

import { FaStar, FaPlay, FaStarHalfAlt } from "react-icons/fa";

const HeroBanner = () => {
  return (
    <section className="min-h-screen px-5 md:px-10 lg:px-16 pt-32 flex items-start relative">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white">
            Earth’s Exhale
          </h1>

          <p className="mt-6 max-w-[520px] text-sm leading-7 text-white">
            “Earth Exhale” symbolizes the purity and vitality of the Earth’s
            natural environment and its essential role in sustaining life.
          </p>

          <div className="flex items-center gap-5 mt-8  text-white">
            <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black duration-300">
              Buy Now
            </button>

            <button className="flex items-center gap-3 text-white">
              <span className="w-11 h-11 rounded-full border flex items-center justify-center">
                <FaPlay size={10} />
              </span>
              Live Demo...
            </button>
          </div>
          <div className="glass-card p-4 mt-4 flex w-50 flex-col">
            <div className="flex gap-5">
              <div>
                <img
                  src="https://res.cloudinary.com/ddn203hk8/image/upload/v1778158347/72419c36cae7ef6f9c25b97e39a231fc9059935c_ajdjtb.png"
                  alt="profleImage"
                  className="size-10 rounded-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-white">Ronnie Hamill</h1>
                <div className="text-yellow-400 flex gap-1">
                  <FaStar size={10} />
                  <FaStar size={10} />
                  <FaStar size={10} />
                  <FaStar size={10} />
                  <FaStarHalfAlt size={10} />
                </div>
              </div>
            </div>
            <div>
              <p className="text-white">
                I can't express how thrilled I am with my new
                <br /> natural plants! They bring such a<br /> fresh and vibrant
                energy to my home.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center ">
          <div className="glass-card absolute right-0 top-10 p-5 w-240px">
            <img
              src="https://res.cloudinary.com/ddn203hk8/image/upload/v1778140679/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6_klqrbq.png"
              alt="plant"
              className="w-40 mx-auto"
            />
            <p className="text-sm text-white">Indoor Plant</p>

            <h3 className="text-2xl mt-2 text-white">Aglaonema plant</h3>

            <button className="border mt-5 px-5 py-2 text-white rounded-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
