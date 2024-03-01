import React, { useState } from "react";

interface ModalProps {
  img: string,
  alt: string,
  gato: string,
  descricao: string,
}

const Modal : React.FC<ModalProps> = ({ img, alt, gato, descricao }) => {
  const [isShown, setIsShown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsShown(!isShown);
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col md:flex-row text-white gap-9">
      <div>
        {/* Imagem */}
        <picture>
          <img
            src={img}
            alt={alt}
            className="w-full h-full md:w-[12rem] md:h-[12rem] object-cover rounded-lg"
          />
        </picture>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center w-full md:w-64 px-6 py-1 rounded-3xl bg-pink-dark">
          <h2 className="font-bebas text-3xl">{gato}</h2>
          <picture onClick={toggleModal}>
            <img
              src={
                isOpen
                  ? "././icon/icon-seta-para-cima.png"
                  : "././icon/icon-seta-para-baixo.png"
              }
              alt="Imagem de uma seta"
              className="w-9 h-9 cursor-pointer"
            />
          </picture>
        </div>

        <div className="flex">
          {isShown && (
            <div className="flex items-center w-full h-full md:w-[30rem] md:h-[9rem] px-6 py-2 rounded-3xl bg-pink-dark relative">
              {/* Modal */}
              <div>
                <p className="font-poppins text-sm md:text-base">
                  {descricao}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
