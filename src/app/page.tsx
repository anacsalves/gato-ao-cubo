export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex flex-col items-center px-4 py-16 gap-12 bg-pink-light text-black md:flex-row-reverse md:justify-center md:px-0 md:py-28 md:gap-0"
      >
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
      </section>

      <section
        id="sobre"
        className="font-poppins text-justify px-9 py-12 md:px-20 md:py-20 text-sm md:text-base lg:px-56 bg-purple-light text-black"
      >
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
      </section>

      <section
        id="cubos"
        className="font-poppins text-justify px-9 py-12 md:px-20 md:py-20 text-sm md:text-base lg:px-56 bg-purple-light text-black"
      >
        <div>
          <div className="mb-6 md:mb-12">
            <hr className="w-[10rem] md:w-[20rem] border-t-4 border-white rounded-full"></hr>
            <h2 className="font-bebas text-4xl md:text-5xl text-white">
              CUBOS
            </h2>
          </div>
        </div>

        <div className="pt-2">
          <p className="font-poppins text-black py-2">
            Os cubos mágicos, também conhecidos como cubos de Rubik, são objetos
            fascinantes que desafiam a mente e estimulam a imaginação. Criados
            pelo arquiteto húngaro Ernő Rubik na década de 1970, esses
            quebra-cabeças tridimensionais rapidamente se tornaram ícones da
            cultura pop, desafiando gerações e transcendendo fronteiras.
          </p>
          <p className="font-poppins text-black py-2">
            Cada cubo mágico é uma obra de arte em si, com suas seis faces
            coloridas e inúmeras combinações possíveis. Resolver um cubo mágico
            é mais do que apenas uma questão de destreza manual; é um exercício
            de paciência, estratégia e pensamento crítico. Cada movimento exige
            concentração e visão de futuro, enquanto você trabalha para alinhar
            as cores e desvendar o mistério do cubo.
          </p>
          <p className="font-poppins text-black py-2">
            Conheça abaixo alguns dos modelos mais populares de cubos mágicos:
          </p>
        </div>

        <div className="flex md:flex-nowrap lg: flex-wrap lg:space-x-8 md: space-x-1 pt-12 ">
          <div className="  h-80 w-full md:w-1/3 ">
            <div className="  bg-white rounded-t-lg flex flex-col items-center justify center">
              <img className="h-64" src="./img/cubo2x2.png" alt="" />
            </div>
            <div className="bg-pink-dark justify-center rounded-b-lg">
              <p className="text-center">Cubo de Rubik 2x2</p>
            </div>
          </div>

          <div className="  h-80 w-full md:w-1/3">
            <div className="bg-white rounded-t-lg flex flex-col items-center justify center">
              <img className="p-2 h-64 " src="./img/cubo3x3.png" alt="" />
            </div>
            <div className="bg-pink-dark justify-center rounded-b-lg">
              <p className="text-center">Cubo de Rubik 3x3</p>
            </div>
          </div>

          <div className="  h-80 w-full md:w-1/3 ">
            <div className="bg-white rounded-t-lg flex flex-col items-center justify center">
              <img className="h-64 " src="./img/cubo4x4.png" alt="" />
            </div>
            <div className="bg-pink-dark justify-center rounded-b-lg">
              <p className="text-center">Cubo de Rubik 4x4</p>
            </div>
          </div>
        </div>

        <div className="flex md:flex-nowrap lg: flex-wrap lg:space-x-8 md: space-x-1 lg:pb-20">
          <div className="h-80 w-full md:w-1/2 ">
            <div className="bg-white rounded-t-lg flex flex-col items-center justify center">
              <img className="h-64 " src="./img/cubo5x5.png" alt="" />
            </div>
            <div className="bg-pink-dark justify-center rounded-b-lg">
              <p className="text-center">Cubo de Rubik 5x5</p>
            </div>
          </div>

          <div className="  h-80 w-full md:w-1/2 ">
            <div className="bg-white rounded-t-lg flex flex-col items-center justify center">
              <img className="h-64 " src="./img/cubo-megaminx,png.jpg" alt="" />
            </div>
            <div className="bg-pink-dark text-center rounded-b-lg">
              <p className="text-center">Cubo Megaminx</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
