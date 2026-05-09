import { MdCopyright } from "react-icons/md";
const Footer = () => {
  return (
    <div className="card-bg w-full">
      <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 flex items-center justify-between p-20">
        <div className="max-w-[400px]">
          <div className="flex items-center gap-2">
            <img
              src="https://res.cloudinary.com/ddn203hk8/image/upload/v1778139082/5e88b52117aa40baa6a96e43b5c4e57858edaa47_utee5y.png"
              alt="logo"
              className="w-10 h-10"
            />
            <h1 className="text-2xl font-bold text-white">FloraVision.</h1>
          </div>
          <p className="text-white mt-5">
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."
          </p>
        </div>
        <div className="max-w-[400px] text-white text-left">
          <p className="font-bold mb-3">Quick Link's</p>
          <ul className="underline cursor-pointer">
            <li>Home</li>
            <li>Type's of plant's</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="max-w-[400px] ">
          <h1 className="text-xl text-white font-bold mb-[60px]">
            For Every Update.
          </h1>
          <div className="flex border-white border rounded-[10px] p-1 items-center justify-center">
            <input
              type="email"
              placeholder="Enter Email"
              className=" block  w-[100%] bg-transparent focus:outline-none text-white"
            />
            <button
              type="button"
              className="bg-white text-black font-bold hover:text-blue-700 hover:border-blue-700 border-2 px-3 py-1 rounded-[10px] w-fit"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-20">
        <div className="flex items-center gap-10">
          <p className="text-white font-bold ">FB</p>
          <p className="text-white font-bold ">TW</p>
          <p className="text-white font-bold ">LI</p>
        </div>
        <div className="flex items-center gap-1 text-white">
          <p>FloraVision</p>
            <MdCopyright size={15}/>
          <p>all right reserve</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
