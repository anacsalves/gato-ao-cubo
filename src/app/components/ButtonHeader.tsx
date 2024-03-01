import React from "react";

interface ButtonHeaderProps {
  texto: string;
}

const ButtonHeader: React.FC<ButtonHeaderProps> = ({ texto }) => {
  return (
    <button className="lg:border-2 lg:border-black lg:px-8 lg:py-0 lg:m-3 lg:bg-white lg:text-black lg:text-md lg:font-semibold lg:font-poppins lg:rounded-full lg:hover:bg-pink-dark lg:hover:scale-105 lg:transition-all">
      {texto}
    </button>
  );
};

export default ButtonHeader;
