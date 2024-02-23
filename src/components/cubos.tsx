import React from "react";
import "./../app/globals.css";

export default function Cubos(){
    return(
        <>
        <div className="flex-col h-420 w-340 px-24 bg-purple-light ">
        <div className="pt-16">
          <hr className="w-[20rem] border-t-4 border-white rounded-full"></hr>
          <h2 className="font-bebas text-7xl text-white">Cubos</h2>
        </div>
           <div className="pt-12">
              <p className="font-poppins text-black py-2">Os cubos mágicos, também conhecidos como cubos de Rubik, são objetos fascinantes que desafiam a mente e estimulam a imaginação. Criados pelo arquiteto húngaro Ernő Rubik na década de 1970, esses quebra-cabeças tridimensionais rapidamente se tornaram ícones da cultura pop, desafiando gerações e transcendendo fronteiras.</p>
              <p className="font-poppins text-black py-2">Cada cubo mágico é uma obra de arte em si, com suas seis faces coloridas e inúmeras combinações possíveis. Resolver um cubo mágico é mais do que apenas uma questão de destreza manual; é um exercício de paciência, estratégia e pensamento crítico. Cada movimento exige concentração e visão de futuro, enquanto você trabalha para alinhar as cores e desvendar o mistério do cubo.</p>
              <p className="font-poppins text-black py-2">Conheça abaixo alguns dos modelos mais populares de cubos mágicos:</p>
           </div>

          <div id="cubos" className="flex space-x-8 pt-12">
           <div className="  h-80 w-1/3 ">
            <div className="  bg-white rounded-t-lg flex flex-col items-center justify center">
                <img className="h-64" src="./img/cubo2x2.png" alt="" />
            </div>
            <div className="bg-pink-dark justify-center rounded-b-lg">
                <p className="text-center">Cubo de Rubik 2x2</p>
            </div>
           </div>

          
           <div className="  h-80 w-1/3 ">
            <div className="bg-white rounded-t-lg flex flex-col items-center justify center">
                <img className="p-2 h-64 " src="./img/cubo3x3.png" alt="" />
            </div>
            <div className="bg-pink-dark justify-center rounded-b-lg">
                <p className="text-center">Cubo de Rubik 3x3</p>
            </div>
           </div>

           <div className="  h-80 w-1/3 ">
            <div className="bg-white rounded-t-lg flex flex-col items-center justify center">
                <img className="h-64 " src="./img/cubo4x4.png" alt="" />
            </div>
            <div className="bg-pink-dark justify-center rounded-b-lg">
                <p className="text-center">Cubo de Rubik 4x4</p>
            </div>
           </div>
           </div>

           <div id="cubos" className="flex space-x-8 pb-20">

           <div className="  h-80 w-1/2  ">
            <div className="bg-white rounded-t-lg flex flex-col items-center justify center">
                <img className="h-64 " src="./img/cubo5x5.png" alt="" />
            </div>
            <div className="bg-pink-dark justify-center rounded-b-lg">
                <p className="text-center">Cubo de Rubik 5x5</p>
            </div>
           </div>

           <div className="  h-80 w-1/2">
            <div className="bg-white rounded-t-lg flex flex-col items-center justify center">
                <img className="h-64 " src="./img/cubo-megaminx,png.jpg" alt="" />
            </div>
            <div className="bg-pink-dark text-center rounded-b-lg">
                <p className="text-center">Cubo Megaminx</p>
            </div>
           </div>

           </div>

        </div>
        </>
    )
}