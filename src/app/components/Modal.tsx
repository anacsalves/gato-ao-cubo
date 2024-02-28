import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
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

      <div className="flex flex-col">
        <div className="flex font-bebas gap-12 text-3xl px-12 py-2 rounded-full bg-pink-dark relative">
          <h2>Gato Laranja</h2>
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

        <div>
          {/* Modal */}
          <Dialog open={isOpen} onClose={toggleModal} className="">
            <Dialog.Overlay />
            <div className="flex justify-center items-center fixed inset-0 z-10 overflow-y-auto">
              <Dialog.Panel className="bg-pink-dark p-6 w-96 rounded-lg text-white">
                <div>
                  <picture onClick={toggleModal}>
                    <img
                      src="././icon/icon-seta-para-cima.png"
                      alt="Imagem de uma seta para cima"
                      className="w-9 h-9 cursor-pointer"
                    />
                  </picture>
                </div>
                <div>
                  <p>
                    Frequentemente são associados à energia e à vitalidade. Eles
                    tendem a ser extrovertidos, sociáveis e cheios de
                    curiosidade, prontos para explorar o mundo ao seu redor com
                    uma atitude otimista e brincalhona.
                  </p>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Modal;
