import SectionTitle from "./SectionTitle";
import { IoBagHandleOutline } from "react-icons/io5";
import Button from "./Button";
const plantList = [
  {
    id: 1,
    imgUrl:
      "https://res.cloudinary.com/ddn203hk8/image/upload/v1778140679/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6_klqrbq.png",
    name: "Aglaonema plant",
    description:
      "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
    price: 300,
  },
  {
    id: 2,
    imgUrl:
      "https://res.cloudinary.com/ddn203hk8/image/upload/v1778140624/b48312dbddc890f7f35ef3964ae1e7900b89782c_sh6vja.png",
    name: "Plantain Lilies",
    description:
      "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
    price: 380,
  },
  {
    id: 3,
    imgUrl:
      "https://res.cloudinary.com/ddn203hk8/image/upload/v1778263537/6d90916507b2b3030961c99c6af0ebac97b86c78_zf6ps5.png",
    name: "Cactus",
    description: "It is known for their ability to thrive in arid environments",
    price: 259,
  },
  {
    id: 4,
    imgUrl:
      "https://res.cloudinary.com/ddn203hk8/image/upload/v1778140719/5196aba58f7006d90ec0712ac1d01688cde1a537_javsqc.png",
    name: "Swiss cheese Plant",
    description:
      "It is a popular tropical houseplant known for its distinctive, perforated leaves",
    price: 400,
  },
  {
    id: 5,
    imgUrl:
      "https://res.cloudinary.com/ddn203hk8/image/upload/v1778140671/eb0351a5771ed55c7f3454bcce697dfe63237769_ihwiif.png",
    name: "Sansevieria plant",
    description:
      "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
    price: 450,
  },
  {
    id: 6,
    imgUrl:
      "https://res.cloudinary.com/ddn203hk8/image/upload/v1778140740/444fba49a2674d2262c5455bcc501cb91b314490_l2bnxe.png",
    name: "Agave plant",
    description:
      "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
    price: 359,
  },
];

const PlantCard = () => {
  return (
    <div className="card-bg pt-20 w-full">
      <SectionTitle>Our Top Selling Plants</SectionTitle>
      <section className="flex items-center justify-center px-6 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1300px] mx-auto">
          {plantList.map((plant) => (
            <div key={plant.id} className=" w-[300px] h-[400px]">
              <div
                className="glass-card
                relative h-full                
                
                border border-[#55634f]
                rounded-[34px]
                overflow-hidden              
                backdrop-blur-md
              "
              >
                <div className="relative z-20 flex justify-center pt-2">
                  <img
                    src={plant.imgUrl}
                    alt={plant.name}
                    className="
                    w-[180px]
                    h-[180px]                   
                  "
                  />
                </div>

                <div className="px-5 pb-5 mt-2 text-justify text-gray-200 ">
                  <h2 className=" text-2xl font-medium leading-tight">
                    {plant.name}
                  </h2>

                  <p className="text-[#9CA39A] text-[13px] leading-[20px] mt-3">
                    {plant.description}
                  </p>

                  <div className="flex items-center justify-between px-5 py-5 absolute bottom-0 left-0 w-full ">
                    <span className=" text-2xl font-medium text-gray-300 ">
                      Rs. {plant.price}/-
                    </span>

                    <Button className="px-4 text-gray-400">
                      <IoBagHandleOutline size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PlantCard;
