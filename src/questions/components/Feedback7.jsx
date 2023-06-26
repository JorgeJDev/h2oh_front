import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export const Feedback7 = () => {
  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);
  const [resultPhrase, setResultPhrase] = useState("");
  useEffect(() => {
    if (answersObject.question7 == "option3") {
      setResultPhrase("Respuesta correcta!");
    } else {
      setResultPhrase("Respuesta incorrecta. ");
    }
  }, []);
  return (
    <div className="relative top-1/2 -translate-y-1/2">
      <p className="text-center font-semibold mb-4">{resultPhrase}</p>
      <p className="text-center mx-4 ">
        Existe un gran desequilibrio entre regiones, liderando la reutilización
        de aguas Murcia (57.8%) y Comunidad Valenciana (40.6%). En el otro lado
        de la balanza se encuentran Navarra y La Rioja, con menos del 1% de agua
        reutilizada.
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
