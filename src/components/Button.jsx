// src/components/Button.jsx

const Button = ({ children, className = ""}) => {
  return (
    <button
      type="button"
      className={`
        border
        px-5
        py-2
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
