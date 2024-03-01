import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-purple-dark">
        <div className="font-poppins text-justify px-9 py-12 md:px-20 md:py-14 text-sm md:text-base lg:px-56 bg-purple-dark text-white max-w-6xl mx-auto">
          <div className="mb-6 md:mb-12">
            <p className="font-bebas text-xl md:text-3xl text-white">
              DESENVOLVIDO POR:
            </p>
          </div>
          <div className="flex gap-9 md:gap-24 justify-center">
            <div>
              <p className="text-white md:text-lg lg:text-xl text-center">
                Ana Clara
              </p>
          
              <div className="flex items-center justify-center h-20">
                <div className="flex flex-row">
                  <a target="blank" href="https://github.com/anacsalves">
                    <img
                      className="h-10 md:h-16"
                      src="./icon/icon-github.png"
                      alt="Imagem da logo do GitHub"
                    />
                  </a>
                </div>
                <div className="flex flex-row">
                  <a target="blank" href="mailto:anacsalves@unifei.edu.br">
                    <img
                      className="h-9 md:h-14"
                      src="./icon/icon-email.png.png"
                      alt="Imagem de um desenho de uma carta"
                    />
                  </a>
                </div>
                <div className="flex flex-row">
                  <a
                    target="blank"
                    href="https://www.instagram.com/anaclarasalves"
                  >
                    <img
                      className=" h-10 md:h-16"
                      src="./icon/icon-instagram.png"
                      alt="Imagem da logo do Instagram"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div>
                <p className="text-white md:text-lg lg:text-xl text-center">
                  Victória Shirley
                </p>
                <div className="flex items-center justify-center h-20">
                  <div className="flex flex-row">
                    <a target="blank" href="https://github.com/victoriashirley">
                      <img
                        className="h-10 md:h-16"
                        src="./icon/icon-github.png"
                        alt="Imagem da logo do GitHub"
                      />
                    </a>
                  </div>
                  <div className="flex flex-row">
                    <a target="blank" href="mailto:victoriacatshirley@gmail.com">
                      <img
                        className="h-9 md:h-14"
                        src="./icon/icon-email.png.png"
                        alt="Imagem de um desenho de uma carta"
                      />
                    </a>
                  </div>
                  <div className="flex flex-row">
                    <a
                      target="blank"
                      href="https://www.instagram.com/viihsilva0312"
                    >
                      <img
                        className=" h-10 md:h-16"
                        src="./icon/icon-instagram.png"
                        alt="Imagem da logo do Instagram"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end mt-12 md:mt-16">
            <a target="blank" href="https://www.byronsolutions.com/">
              <picture className="">
                <img
                  className="w-48 md:w-64"
                  src="./img/logo-byron.png"
                  alt="imagem da logo da byron.solutions"
                />
              </picture>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
