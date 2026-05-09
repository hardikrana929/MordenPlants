//This component is used to crate button
const Button = ({ children, className = ""}) => {
  return (
    <button
      type="button"
      className={`
        border
        px-7
        py-1
        text-white
        rounded-md
        transition-all
        duration-300
        hover:bg-white
        hover:text-black
        ${className}
      `}
    
    >
      {children}
    </button>
  );
};

export default Button;
