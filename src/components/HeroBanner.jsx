import { FaStar, FaPlay, FaStarHalfAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { TbRectangleFilled } from "react-icons/tb";
import { IoBagHandleOutline } from "react-icons/io5";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
const HeroBanner = () => {
  return (
    <div className="main-bg pb-5">
      {/* Hero section */}
      <section className="min-h-screen px-5 md:px-10 lg:px-16 pt-32 flex items-start relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white">
              Earth’s Exhale
            </h1>

            <p className="mt-6 max-w-[520px] text-sm leading-7 text-white">
              “Earth Exhale” symbolizes the purity and vitality of the Earth’s
              natural environment and its essential role in sustaining life.
            </p>

            <div className="flex items-center gap-5 mt-8  text-white">
              {/* <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black duration-300">
              Buy Now
            </button> */}
              <Button>Buy Now</Button>
              <button className="flex items-center gap-3 text-white">
                <span className="w-11 h-11 rounded-full border flex items-center justify-center">
                  <FaPlay size={10} />
                </span>
                Live Demo...
              </button>
            </div>
            <div className="glass-card p-4 mt-4 flex flex-col m-width-470px w-fit">
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
                  <br /> natural plants! They bring such a<br /> fresh and
                  vibrant energy to my home.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end lg:pr-10 xl:pr-20">
            <div className="glass-card p-10 w-320px">
              <img
                src="https://res.cloudinary.com/ddn203hk8/image/upload/v1778140679/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6_klqrbq.png"
                alt="plant"
                className="mx-auto"
                width="200px"
              />
              <p className="text-sm text-white">Indoor Plant</p>

              <h3 className="text-2xl mt-2 text-gray-300 flex items-center gap-5">
                Aglaonema plant
                <span>
                  <IoIosArrowForward />
                </span>
              </h3>

              <Button className="mt-3">Buy Now</Button>
              <div className="flex items-center justify-center gap-2 mt-4">
                <TbRectangleFilled className="text-white " size={10} />
                <FaCircle className="text-white " size={6} />
                <FaCircle className="text-white " size={6} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending plants section */}
      <SectionTitle>Our Trendy plants</SectionTitle>
      <section>
        <div className="glass-big px-5 md:px-10 lg:px-16 pt-32 m-20">
          <div>
            <img
              src="https://res.cloudinary.com/ddn203hk8/image/upload/v1778140624/b48312dbddc890f7f35ef3964ae1e7900b89782c_sh6vja.png"
              alt="deske-decoration"
              width="400px "
            />
          </div>
          <div className=" flex flex-col gap-5">
            <h1 className="text-white text-4xl">For Your Desks Decorations</h1>
            <p className="text-gray-300 mt-10">
              I recently added a beautiful desk decoration plant to my
              workspace, and it has made such a positive difference!
            </p>
            <p className="text-2xl font-bold text-white">Rs.500/-</p>
            <div className="flex gap-8 items-center">
              <Button className="w-100%">Explore</Button>
              <Button className="px-2">
                <IoBagHandleOutline size={20} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="glass-big px-5 md:px-10 lg:px-16 pt-22 m-20">
          <div className=" flex flex-col gap-5">
            <h1 className="text-white text-4xl">For Your Desks Decorations</h1>
            <p className="text-gray-300 mt-10">
              The greenery adds a touch of nature and serenity to my desk,
              making it feel more inviting and calming
            </p>
            <p className="text-2xl font-bold text-white">Rs.399/-</p>
            <div className="flex gap-8 items-center">
              <Button className="w-100%">Explore</Button>
              <Button className="px-2">
                <IoBagHandleOutline size={20} />
              </Button>
            </div>
          </div>
          <div className="mx-auto">
            <img
              src="https://res.cloudinary.com/ddn203hk8/image/upload/v1778140208/95e728282f4fb901ee2edc80783c2fbd7df490c2_iaknjo.png"
              alt="deske-decoration"
              width="400px "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;
