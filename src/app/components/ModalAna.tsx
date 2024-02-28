import React, { useState } from "react";

const ModalAna = () => {
  const [isShown, setIsShown]= useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const toggleModal = () => {
    setIsShown(!isShown);
    setIsOpen(!isOpen);

  };

  return (
    <div className="flex text-white gap-10">
      <div>
        {/* Imagem */}
        <picture>
          <img
            src="/img/gato-laranja.png"
            alt="Imagem de um gato laranja"
            className="w-[14rem] h-[14rem] object-cover rounded-lg"
          />
        </picture>
      </div>

        <div className="flex font-bebas gap-12 h-20 w-1/2 text-3xl px-12 py-2 rounded-full bg-pink-dark relative">
          <h2>Gato Laranja</h2>
          <picture onClick={toggleModal}>
            <img
              src={
                isOpen
                  ? "././icon/icon-seta-para-cima.png"
                  : "././icon/icon-seta-para-baixo.png"
              }
              alt="Imagem de uma seta "
              className="w-9 h-9 cursor-pointer  "
            />
          </picture>
        </div>

        {isShown &&(
        <div className="flex font-poppins gap-12 w-2/3 text-lg px-12 py-2 rounded-full bg-pink-dark relative">
          {/* Modal */}
                
                <div>
                  <p>
                    Frequentemente são associados à energia e à vitalidade. Eles
                    tendem a ser extrovertidos, sociáveis e cheios de
                    curiosidade, prontos para explorar o mundo ao seu redor com
                    uma atitude otimista e brincalhona.
                  </p>
                </div>
                </div>
            )}
</div>

    );

};

export default ModalAna;