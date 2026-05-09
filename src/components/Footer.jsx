import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="card-bg w-full">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {/* Logo Content */}
          <div className="max-w-[400px]">
            <div className="flex items-center gap-2">
              <img
                src="https://res.cloudinary.com/ddn203hk8/image/upload/v1778139082/5e88b52117aa40baa6a96e43b5c4e57858edaa47_utee5y.png"
                alt="logo"
                className="w-10 h-10"
              />

              <h1 className="text-2xl font-bold text-white">FloraVision.</h1>
            </div>

            <p className="text-white mt-5 leading-7">
              "From lush indoor greens to vibrant outdoor blooms, our plants are
              crafted to thrive and elevate your living environment."
            </p>
          </div>

          <div className="text-white">
            <p className="font-bold mb-4 text-xl">Quick Link's</p>

            {/* CHANGE HERE */}
            {/* Added spacing */}
            <ul className="space-y-3 underline cursor-pointer">
              <li>Home</li>
              <li>Type's of plant's</li>
              <li>Contact</li>
              <li>Privacy</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="w-full">
            <h1 className="text-xl text-white font-bold mb-6">
              For Every Update.
            </h1>

            {/* CHANGE HERE */}

            <div className="flex flex-col sm:flex-row gap-3 border border-white rounded-[12px] p-1">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full bg-transparent focus:outline-none text-white px-2 "
              />

              <button
                type="button"
                className="bg-white text-black font-bold hover:text-blue-700 hover:border-blue-700 border-2 px-5 py-2 rounded-[10px] whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5  mt-12 pt-6">
          <div className="flex items-center gap-8">
            <p className="text-white font-bold cursor-pointer">FB</p>

            <p className="text-white font-bold cursor-pointer">TW</p>

            <p className="text-white font-bold cursor-pointer">LI</p>
          </div>

          <div className="flex items-center gap-1 text-white text-sm text-center">
            <p>FloraVision</p>

            <MdCopyright size={15} />

            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
