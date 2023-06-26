import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export const Feedback2 = () => {
  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);
  const [resultPhrase, setResultPhrase] = useState("");
  useEffect(() => {
    if (answersObject.question2 == "option1") {
      setResultPhrase("Respuesta correcta!");
    } else {
      setResultPhrase("Respuesta incorrecta. ");
    }
  }, []);

  return (
    <div className="relative top-1/2 -translate-y-1/2">
      <p className="text-center font-semibold mb-4">{resultPhrase}</p>
      <p className="text-center mx-4 ">
        En España, el Ministerio para la Transición Ecológica es responsable de
        varias tareas relacionadas con la gestión de recursos hídricos,
        incluyendo la elaboración del Plan Hidrológico Nacional, la coordinación
        de planes de emergencia, la inspección y control de infraestructuras
        hidráulicas, el establecimiento de criterios para la conservación de
        acuíferos, y la promoción de actividades de depuración y reutilización
        del agua, así como medidas para fomentar el ahorro del agua.
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
