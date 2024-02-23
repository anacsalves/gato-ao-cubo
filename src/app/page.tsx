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
    </>
  );
}
