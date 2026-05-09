import SectionTitle from "./SectionTitle";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { TbRectangleFilled } from "react-icons/tb";
import Button from "./Button";
const reviewList = [
  {
    id: 1,
    imgUrl:
      "https://res.cloudinary.com/ddn203hk8/image/upload/v1778140762/a5003c9c04bdc265d997eb88ecb49b2ed88c8428_nekxk7.png",
    name: "Shelly Russel",
    review:
      "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!",
  },
  {
    id: 2,
    imgUrl:
      "https://res.cloudinary.com/ddn203hk8/image/upload/v1778140422/8af347a65acb49fcb29cfac2ba705f2b27151f3f_mgy2mr.jpg",
    name: "Lula Rolfson",
    review:
      "Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
  },
  {
    id: 3,
    imgUrl:
      "https://res.cloudinary.com/ddn203hk8/image/upload/v1778140205/04f4a376d1869488dd43f1a5e57a36f5cdf73be4_tdtsgy.png",
    name: "Carol Huels",
    review:
      "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
  },
];
const TestimonialCard = () => {
  return (
    <div className="card-bg flex items-center justify-center flex-col gap-10 py-10 w-full pt-40">
      <SectionTitle>Customer Review</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-20">
        {reviewList.map((card) => (
          <div
            key={card.id}
            className=" glass-card relative overflow-hidden rounded-[38px] border w-[300px] h-[300px]"
          >
            <div className="relative z-10 px-7 pt-14">
              <div className="flex items-start gap-5">
                <img
                  src={card.imgUrl}
                  alt={card.name}
                  className="w-[44px] h-[44px] rounded-full object-cover"
                />

                <div>
                  <h3 className="text-white text-[18px] font-semibold leading-none">
                    {card.name}
                  </h3>

                  <div className="text-yellow-400 flex gap-1">
                    <FaStar size={10} />
                    <FaStar size={10} />
                    <FaStar size={10} />
                    <FaStar size={10} />
                    <FaStarHalfAlt size={10} />
                  </div>
                </div>
              </div>

              <p className="text-justify text-[#d2d2d2] text-[14px] leading-[22px] mt-6 max-w-[280px]">
                {card.review}
              </p>
            </div>
          </div>
        ))}
      </div>
      <section className="mt-20 mb-20 w-full p-10">
        <SectionTitle>Our Best O2</SectionTitle>
        <div className="glass-big px-5 md:px-10 lg:px-16 pt-32 m-20">
          <div>
            <img
              src="https://res.cloudinary.com/ddn203hk8/image/upload/v1778140679/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6_klqrbq.png"
              alt="deske-decoration"
              width="400px "
            />
          </div>
          <div className=" flex flex-col gap-5 mb-20">
            <h3 className="text-gray-300 text-2xl mt-3">
              We Have Small And Best O2 Plants Collection’s
            </h3>
            <p className="text-gray-300 mt-4">
              Oxygen-producing plants, often referred to as "O2 plants," are
              those that release oxygen into the atmosphere through the process
              of photosynthesis.
              <br />
              <br />
              Many plants can help filter out pollutants and toxins from the
              air, such as formaldehyde, benzene, and trichloroethylene. This
              makes the air cleaner and healthier to breathe.
            </p>

            <div className="flex gap-8 items-center justify-between">
              <Button className="w-100% text-gray-400">Explore</Button>
              <div className="flex items-center justify-center">
                <IoIosArrowBack className="text-gray-400" size={25} />
                <span className="text-gray-300 text-[14px] ml-4 mr-4">01/<small>04</small></span>
                <IoIosArrowForward className="text-gray-200" size={25} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mt-4">
          <TbRectangleFilled className="text-white " size={10} />
          <FaCircle className="text-white " size={6} />
          <FaCircle className="text-white " size={6} />
        </div>
      </section>
    </div>
  );
};

export default TestimonialCard;
