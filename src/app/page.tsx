"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "./components/Modal";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: any) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
    } else {
      alert("Email enviado!");
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_f97nsk2",
        "template_yefo9av",
        templateParams,
        "CXavmcc4Rf92soF5z"
      )
      .then((response) => {
        console.log("Email enviado!", response.status, response.text);
        setName("");
        setMessage("");
        setEmail("");
      })
      .catch((error) => {
        console.error("Erro ao enviar email:", error);
        alert("Erro ao enviar email. Por favor, tente novamente mais tarde.");
      });
  }

  return (
    <>
      <section
        id="home"
        className="bg-pink-light"
      >
        <div className="flex flex-col items-center px-4 py-16 gap-12 bg-pink-light text-black md:flex-row-reverse md:justify-center md:px-0 md:py-28 md:gap-0 max-w-6xl mx-auto">
          <p className="font-bebas text-2xl max-w-lg text-center md:text-4xl md:w-[28rem] lg:text-5xl lg:w-[30rem]">
            Onde a curiosidade felina se entrelaça com a lógica desafiadora do
            cubo mágico!
          </p>
          <picture className="flex items-center justify-center">
            <img
              className="w-[24rem] md:w-[26rem] lg:w-[30rem]"
              src="./img/imagem-da-home.png"
              alt="Imagem de um gato com alguns cubos mágicos."
            />
          </picture>
        </div>
        </section>

      <section
        id="sobre"
        className="bg-purple-light"
      >
        <div className="font-poppins text-justify px-9 py-12 md:px-20 md:py-20 text-sm md:text-base lg:px-56 bg-purple-light text-black max-w-6xl mx-auto">
          <div className="mb-6 md:mb-12">
            <hr className="w-[10rem] md:w-[20rem] border-t-4 border-white rounded-full"></hr>
            <h2 className="font-bebas text-4xl md:text-5xl text-white">SOBRE</h2>
          </div>
          <div className="md:flex md:gap-20">
            <div className="flex flex-col gap-6 ">
              <p>
                Somos uma dupla apaixonada por duas coisas{" "}
                <strong>aparentemente distintas</strong>, mas que encontram um elo
                encantador em nossa vida: gatos e cubos mágicos. Nesta página,
                queremos compartilhar com vocês essa paixão singular e mostrar
                como esses dois universos se entrelaçam de maneiras inesperadas e
                surpreendentes.
              </p>
              <p>
                Assim como os cubos mágicos,{" "}
                <strong>os gatos são seres multifacetados</strong>, cada um com
                sua própria cor e personalidade. E é exatamente essa diversidade
                que nos encanta e nos inspira a criar este espaço onde podemos
                explorar as nuances e os encantos tanto dos felinos quanto dos
                quebra-cabeças mágicos.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <p>
                Junte-se a nós nesta jornada onde vamos explorar o mundo dos gatos
                e dos cubos mágicos de uma forma única e cativante. Deixe-se
                envolver pela magia dos cubos e pela peculiaridade dos gatos,
                enquanto descobrimos juntos as maravilhas que esses universos têm
                a oferecer.
              </p>
              <div className="flex flex-col items-center">
                <div className="flex flex-col gap-6">
                  <div className="flex gap-8">
                    <picture>
                      <img
                        className="rounded-full w-20"
                        src="/img/foto-ana.jpg"
                        alt="Foto da Ana Clara."
                      />
                    </picture>
                    <p className="flex items-center">Ana Clara</p>
                  </div>
                  <div className="flex gap-8">
                    <picture>
                      <img
                        className="rounded-full w-20"
                        src="/img/foto-victoria.jpeg"
                        alt="Foto da Victória."
                      />
                    </picture>
                    <p className="flex items-center">Victória Shirley</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="gatos"
        className="bg-pink-light"
      >
        <div  className="font-poppins py-12 md:py-20 text-justify bg-pink-light text-black max-w-6xl mx-auto">
          <div className="px-9 md:px-20 lg:px-56 text-sm md:text-base ">
            <div className="mb-6 md:mb-12">
              <hr className="w-[10rem] md:w-[20rem] border-t-4 border-white rounded-full"></hr>
              <h2 className="font-bebas text-4xl md:text-5xl text-white">GATOS</h2>
            </div>
            <div className="md:flex md:gap-20">
              <div className="flex flex-col mb-12">
                <p>
                  Em "Gato ao Cubo", mergulhamos na fascinante{" "}
                  <strong>
                    relação entre as cores dos gatos e suas personalidades
                    vibrantes.
                  </strong>{" "}
                  Acreditamos que as nuances das cores felinas não são apenas
                  esteticamente atraentes, mas também podem revelar muito sobre os
                  traços e temperamentos únicos de cada felino.
                </p>
              </div>
            </div>
          </div>
          <div className="flex px-9 md:px-0 flex-col items-center gap-20">
            <Modal
              img="./img/gato-laranja.png"
              alt="Imagem de um gato laranja."
              gato="GATO LARANJA"
              descricao="Frequentemente são associados à energia e à vitalidade. Eles tendem a ser extrovertidos, sociáveis e cheios de curiosidade, prontos para explorar o mundo ao seu redor com uma atitude otimista e brincalhona."
            />
            <Modal
              img="./img/gato-branco.png"
              alt="Imagem de um gato branco."
              gato="GATO BRANCO"
              descricao="Os gatos brancos, com sua pureza e elegância, muitas vezes emanam uma sensação de calma e tranquilidade. São geralmente gentis, amorosos e tolerantes, revelando-se como companheiros carinhosos e protetores para suas famílias humanas."
            />
            <Modal
              img="./img/gato-preto.png"
              alt="Imagem de um gato preto."
              gato="GATO PRETO"
              descricao="Frequentemente envoltos em mitos e superstição, são na verdade criaturas cheias de personalidade e charme. São frequentemente descritos como independentes e misteriosos, com uma atitude confiante e decidida que os torna verdadeiros líderes em seu ambiente."
            />
          </div>
        </div>
      </section>

      <section
        id="cubos"
        className="bg-purple-light"
      >
        <div className="font-poppins text-justify px-9 py-12 md:px-20 md:py-20 text-sm md:text-base lg:px-56 bg-purple-light text-black max-w-6xl mx-auto">
          <div>
            <div className="mb-6 md:mb-12">
              <hr className="w-[10rem] md:w-[20rem] border-t-4 border-white rounded-full"></hr>
              <h2 className="font-bebas text-4xl md:text-5xl text-white">
                CUBOS
              </h2>
            </div>
          </div>
          <div className="pt-2">
            <p className="py-2">
              Os cubos mágicos, também conhecidos como cubos de Rubik, são objetos
              fascinantes que desafiam a mente e estimulam a imaginação. Criados
              pelo arquiteto húngaro <strong>Ernő Rubik</strong> na década de <strong>1970</strong>, esses
              quebra-cabeças tridimensionais rapidamente se tornaram ícones da
              cultura pop, desafiando gerações e transcendendo fronteiras.
            </p>
            <p className="py-2">
              Cada cubo mágico é uma obra de arte em si, com suas seis faces
              coloridas e inúmeras combinações possíveis. Resolver um cubo mágico
              é mais do que apenas uma questão de destreza manual; é um <strong>exercício
              de paciência, estratégia e pensamento crítico</strong>. Cada movimento exige
              concentração e visão de futuro, enquanto você trabalha para alinhar
              as cores e desvendar o mistério do cubo.
            </p>
            <p className="py-2">
              Conheça abaixo alguns dos modelos mais populares de cubos mágicos:
            </p>
          </div>
          <div className="flex md:flex-nowrap lg: flex-wrap lg:space-x-8 md: space-x-1 pt-12 ">
            <div className="h-80 w-full md:w-1/3 hover:scale-95 transition-all">
              <div className="bg-white rounded-t-lg flex flex-col items-center justify center">
                <img className="h-64" src="./img/cubo2x2.png" alt="Imagem de um cubo 2x2." />
              </div>
              <div className="bg-pink-dark justify-center p-2 rounded-b-lg">
                <p className="text-center text-white">Cubo de Rubik 2x2</p>
              </div>
            </div>
            <div className="  h-80 w-full md:w-1/3 hover:scale-95 transition-all">
              <div className="bg-white rounded-t-lg flex flex-col items-center justify center">
                <img className="p-2 h-64 " src="./img/cubo3x3.png" alt="Imagem de um cubo 3x3." />
              </div>
              <div className="bg-pink-dark justify-center p-2 rounded-b-lg">
                <p className="text-center text-white">Cubo de Rubik 3x3</p>
              </div>
            </div>
            <div className="  h-80 w-full md:w-1/3 hover:scale-95 transition-all">
              <div className="bg-white rounded-t-lg flex flex-col items-center justify center">
                <img className="h-64 " src="./img/cubo4x4.png" alt="Imagem de um cubo 4x4." />
              </div>
              <div className="bg-pink-dark justify-center p-2 rounded-b-lg">
                <p className="text-center text-white">Cubo de Rubik 4x4</p>
              </div>
            </div>
          </div>
          <div className="flex md:flex-nowrap lg: flex-wrap lg:space-x-8 md: space-x-1 lg:pb-20">
            <div className="h-80 w-full md:w-1/2 hover:scale-95 transition-all">
              <div className="bg-white rounded-t-lg flex flex-col items-center justify center">
                <img className="h-64 " src="./img/cubo5x5.png" alt="Imagem de um cubo 5x5." />
              </div>
              <div className="bg-pink-dark justify-center p-2 rounded-b-lg">
                <p className="text-center text-white">Cubo de Rubik 5x5</p>
              </div>
            </div>
            <div className="h-80 w-full md:w-1/2 hover:scale-95 transition-all">
              <div className="bg-white rounded-t-lg flex flex-col items-center justify center">
                <img className="h-64 " src="./img/cubo-megaminx.jpg" alt="Imagem de um cubo Megaminx." />
              </div>
              <div className="bg-pink-dark text-center p-2 rounded-b-lg">
                <p className="text-center text-white">Cubo Megaminx</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="bg-pink-light"
      >
        <div className="font-poppins text-justify px-9 py-12 md:px-20 md:py-20 text-base md:text-xl lg:px-56 bg-pink-light text-white max-w-6xl mx-auto"> 
          <div className="mb-6 md:mb-12">
            <hr className="w-[10rem] md:w-[20rem] border-t-4 border-white rounded-full"></hr>
            <h2 className="font-bebas text-4xl md:text-5xl text-white">
              CONTATO
            </h2>
          </div>
          <div className="flex flex-col gap-6 md:gap-12">
            <div>
              <p className="text-black">Comente o que achou do nosso site:</p>
            </div>
            <form className="form" onSubmit={sendEmail}>
              <div className="mb-6 md:mb-12">
                <label htmlFor="nome" className="block mb-2">
                  <p>Nome:</p>
                </label>
                <input
                  required
                  type="text"
                  id="nome"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="w-full py-0 md:px-4 md:py-2 text-black rounded-lg focus:outline-none"
                />
              </div>
              <div className="mb-6 md:mb-12">
                <label htmlFor="email" className="block mb-2">
                  <p>E-mail:</p>
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="w-full py-0 md:px-4 md:py-2 text-black rounded-lg focus:outline-none"
                />
              </div>
              <div className="mb-2 md:mb-6">
                <label
                  htmlFor="comentario"
                  className="block mb-2 focus:outline-none"
                >
                  <p>Comentário:</p>
                </label>
                <textarea
                  required
                  id="comentario"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="w-full px-4 py-2 h-36 md:h-56 text-black rounded-lg focus:outline-none"
                />
              </div>
              <button
                className="w-full px-3 py-2 rounded-lg bg-pink-dark hover:scale-95 transition-all focus:outline-none"
                type="submit"
                value="Enviar"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
