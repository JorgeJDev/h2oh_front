import React from "react";

export const QuestionNumber = ({ questionNumber }) => {
  const titles = [
    "Primera pregunta",
    "Segunda pregunta",
    "Tercera pregunta",
    "Cuarta pregunta",
    "Quinta pregunta",
    "Sexta pregunta",
    "Séptima pregunta",
    "Octava pregunta",
  ];

  return (
    <>
      <p className="mx-4 mt-4 text-xs">
        {titles[parseInt(questionNumber) - 1]}
      </p>
      <div className="mx-4 my-2 flex">
        {titles.map((item, i) => (
          <div
            key={item}
            className={`me-2  ${
              questionNumber > i ? "bg-primary" : "bg-small-button"
            } rounded-md py-0.5 px-4 md:px-6 lg:px-10`}
          ></div>
        ))}
      </div>
    </>
  );
};
