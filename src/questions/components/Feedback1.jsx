import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export const Feedback1 = () => {
  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);
  const [resultPhrase, setResultPhrase] = useState("");
  useEffect(() => {
    if (answersObject.question1 == "option2") {
      setResultPhrase("Respuesta correcta!");
    } else {
      setResultPhrase("Respuesta incorrecta. ");
    }
  }, []);

  return (
    <div className="relative top-1/2 -translate-y-1/2">
      <p className="text-center font-semibold mb-4">{resultPhrase}</p>
      <p className="text-center mx-4 ">
        Las políticas del agua abordan una amplia gama de temas relacionados con
        la gestión del agua, como la planificación y desarrollo de
        infraestructuras hidráulicas, la protección de los ecosistemas
        acuáticos, la conservación del agua, la gestión de la sequía y las
        inundaciones, la promoción de la eficiencia en el uso del agua.
      </p>
    </div>
  );
};
