import React, { useState } from "react";
import backButton from "../../assets/backButton.svg";
import logoText from "../../assets/logoText.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { QuestionNumber } from "../components/QuestionNumber";
import { Question1 } from "../components/Question1";
import { Question2 } from "../components/Question2";
import { Question3 } from "../components/Question3";
import { Question4 } from "../components/Question4";
import { Question5 } from "../components/Question5";
import { Question6 } from "../components/Question6";
import { Question7 } from "../components/Question7";
import { Question8 } from "../components/Question8";

export const QuestionPage = () => {
  const navigate = useNavigate();
  const { questionNumber } = useParams();

  return (
    <div className="pb-10">
      <div className="flex pt-6 mx-5">
        <button onClick={() => navigate(-1)}>
          <h1>
            <img src={backButton} alt="left arrow" />
          </h1>
        </button>
        <img
          className="text-center  ms-[calc(50%-7rem)] mt-2"
          src={logoText}
          alt="logo H2OH"
        />
      </div>
      <h2 className="mt-1 py-2 text-center text-white text-lg font-thin bg-primary">
        ¿Cuánto sabes de Políticas azules?
      </h2>

      <QuestionNumber questionNumber={questionNumber} />
      {questionNumber == 1 && <Question1 />}
      {questionNumber == 2 && <Question2 />}
      {questionNumber == 3 && <Question3 />}
      {questionNumber == 4 && <Question4 />}
      {questionNumber == 5 && <Question5 />}
      {questionNumber == 6 && <Question6 />}
      {questionNumber == 7 && <Question7 />}
      {questionNumber == 8 && <Question8 />}
    </div>
  );
};
