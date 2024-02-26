import React from "react";

export default function Footer() {
  return(
    <>
    
    <div className="flex w-340 lg:h-96 md:h-80 bg-purple-dark relative">
        <div className="h-72  lg:pr-24 md:px-8 lg:py-16 md:px-8">
            <p className="lg:text-5xl md:text-2xl font-bebas text-white">DESENVOLVIDO POR:</p>
        </div>
        <div id="nomes" className="flex lg:gap-8 md:gap-4 lg:mr-4 md:mr-4 lg:mt-36 md:mt-28">
        <div className="flex-row h-12  flex flex-col items-center" id="ana">
                <div className="">
                    <p className="font-poppins text-white lg:text-xl md:text-lg h-12 text-center">Ana Clara</p>
                </div>

                    <div id="redes-sociais" className="flex items-center justify-center h-20  ">

                    <div className="flex flex-row"> 
                        <a target="blank" href="https://github.com/anacsalves">
                            <img className="lg:h-16 md:10" src="./icon/icon-github.png" alt="imagem da logo do github" />
                        </a>
                    </div>
                    <div className="flex flex-row"> 
                        <a target="blank" href="mailto:anacsalves@unifei.edu.br">
                            <img className="lg:h-14 md:10" src="./icon/icon-email.png.png" alt="imagem de um desenho de uma carta" />
                        </a>
                    </div>
                    <div className="flex flex-row">
                         <a target="blank" href="https://www.instagram.com/anaclarasalves">
                            <img className="lg:h-16 md:10" src="./icon/icon-instagram.png" alt="imagem da logo do instagram" />
                        </a>
                    </div>

                    </div>                          
            </div>
                          
            <div className="flex-row h-12  flex flex-col items-center" id="vic">
                <div className="">
                    <p className="font-poppins text-white lg:text-xl md:text-lg h-12 text-center">Victoria Shirley</p>
                </div>

                    <div id="redes-sociais" className="flex items-center justify-center h-20  ">

                    <div className="flex flex-row"> 
                        <a target="blank" href="https://github.com/victoriashirley">
                            <img className="lg:h-16 md:10" src="./icon/icon-github.png" alt="imagem da logo do github" />
                        </a> 
                    </div>
                    <div className="flex flex-row"> 
                        <a target="blank" href="mailto:victoriacatshirley@gmail.com">
                            <img className="lg:h-14 md:10" src="./icon/icon-email.png.png" alt="desenho deuma cartas" />
                        </a> 
                    </div>
                    <div className="flex flex-row"> 
                        <a target="blank" href="https://www.instagram.com/viihsilva0312">
                            <img className="lg:h-16 md:10" src="./icon/icon-instagram.png" alt="imagem da logo do instagram" />
                        </a> 
                    </div>

                    </div>         
            </div>
        </div>

        <div className="flex absolute bottom-0 right-0 lg:mb-12 md:mb-6 lg:mr-24 md:mr-5" >
            <a target="blank" href="https://www.byronsolutions.com/">
        <picture className="" >
            <img className="h-12 px-240 py-88 " src="./img/logo-byron.png" alt="imagem da logo da byron.solutions" />
        </picture>
        </a>
        </div>
    </div>
    
    </>
  )
}