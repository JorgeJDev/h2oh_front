import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export const Feedback4 = () => {
  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);
  const [resultPhrase, setResultPhrase] = useState("");
  useEffect(() => {
    if (answersObject.question4 == "option3") {
      setResultPhrase("Respuesta correcta!");
    } else {
      setResultPhrase("Respuesta incorrecta. ");
    }
  }, []);
  return (
    <div className="relative top-1/2 -translate-y-1/2">
      <p className="text-center font-semibold mb-4">{resultPhrase}</p>
      <p className="text-center mx-4 ">
        En España se establece una media de consumo en las dos últimas décadas
        de 39.3 litros por persona y día, siendo Cantabria con 45.7 la comunidad
        que más gasto de agua realiza.
      </p>
    </div>
  );
  //} else {
  //   return (
  //     <p className="text-center">
  //       Feedback para pregunta 1: respuesta incorrecta
  //     </p>
  //   );
  // }
};
