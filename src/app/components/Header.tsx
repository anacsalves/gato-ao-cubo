import React from "react";
import ButtonHeader from "./ButtonHeader";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="flex items-center h-20 md:h-28 lg:h-36 bg-white max-w-6xl mx-auto">
        <div className="flex items-center justify-between w-full px-4 md:px-12 lg:px-14">
          <picture>
            <a href="">
              <img
                className="w-28 md:w-36 lg:w-52 hover:scale-95 transition-all"
                src="./img/logo.png"
                alt="Logo do Gato ao Cubo."
              />
            </a>
          </picture>
          <div>
            <a className="hidden lg:inline" href="#sobre">
              <ButtonHeader texto="Sobre" />
            </a>
            <a className="hidden lg:inline" href="#gatos">
              <ButtonHeader texto="Gatos" />
            </a>
            <a className="hidden lg:inline" href="#cubos">
              <ButtonHeader texto="Cubos" />
            </a>
            <a className="hidden lg:inline" href="#contato">
              <ButtonHeader texto="Contato" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
