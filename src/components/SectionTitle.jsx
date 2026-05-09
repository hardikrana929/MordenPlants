//Section title component with left and right curve images
const SectionTitle = ({children},className="") => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className="relative inline-block">
        <h3 className="text-white section-title text-3xl md:text-4xl font-bold px-12 m-2">
          {children}
        </h3>

        <img
          src="https://res.cloudinary.com/ddn203hk8/image/upload/v1778221121/Vector_5_mruaon.png"
          alt="leftCurve"
          className="absolute left-12 top-1/2 -translate-y-1/2 w-8 md:w-10 m-0"
        />

        <img
          src="https://res.cloudinary.com/ddn203hk8/image/upload/v1778221121/Vector_6_nac8wy.png"
          alt="rightCurve"
          className="absolute right-12 top-1/2 -translate-y-1/2 w-8 md:w-10 m-0"
        />
      </div>
    </div>
  );
};

export default SectionTitle;