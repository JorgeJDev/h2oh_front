import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export const Feedback3 = () => {
  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);
  const [resultPhrase, setResultPhrase] = useState("");
  useEffect(() => {
    if (answersObject.question3 == "option2") {
      setResultPhrase("Respuesta correcta!");
    } else {
      setResultPhrase("Respuesta incorrecta. ");
    }
  }, []);
  return (
    <div className="relative top-1/2 -translate-y-1/2">
      <p className="text-center font-semibold mb-4">{resultPhrase}</p>
      <p className="text-center mx-4 ">
        La titularidad del agua en España corresponde al Estado, pero su gestión
        se lleva a cabo a través de las administraciones regionales y locales de
        cada comunidad autónoma. En algunos casos se han creado empresas
        públicas para la gestión del suministro y saneamiento.
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
