import Button from "./Button";

const Footer = () => {
  return (
    <div className="">
      <div className="card-bg grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 flex items-center justify-between w-full">
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
        <div className="max-w-[400px] text-white">
          <p className="font-bold mb-3">Quick Link's</p>
          <ul className="underline">
            <li>Home</li>
            <li>Type's of plant's</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="max-w-[400px] ">
          <h1 className="text-xl text-white font-bold">For Every Update.</h1>
          <div className="flex border-white mt-5 border-2 rounded-[10px] p-1">
          <input type='email' placeholder="Enter Email" className=" block p-1 w-[100%] bg-transparent focus:outline-none" />
          <Button className="bg-white text-black font-bold hover:text-blue-700 border-blue-700">
            Subscribe
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
