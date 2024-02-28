// Exemplo de código TSX com Tailwind CSS

import React, { useState } from 'react';

const MeuComponente: React.FC = () => {
  const [mostrarCard, setMostrarCard] = useState(false); // Estado para controlar se o card está visível ou não
  const [setaParaCima, setSetaParaCima] = useState(false); // Estado para controlar a direção da seta

  const toggleCard = () => {
    setMostrarCard(!mostrarCard); // Alternar entre mostrar e ocultar o card
    setSetaParaCima(!setaParaCima); // Alternar entre a seta para cima e para baixo
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-4">
        <p>Seu texto aqui</p>
      </div>

      {/* Definição da seta com base no estado setaParaCima */}
      <div className="mb-4">
        <button onClick={toggleCard} className="focus:outline-none">
          {setaParaCima ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mostra o card se mostrarCard for verdadeiro */}
      {mostrarCard && (
        <div className="bg-gray-200 p-4">
          {/* Conteúdo do card aqui */}
          <p>Conteúdo do card</p>
        </div>
      )}
    </div>
  );
};

export default MeuComponente;
