import React from "react";
import gota from "../../assets/gota.png";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FinalFeedback } from "../components/FinalFeedback";
import { setScore } from "../../store/slice/score/scoreSlice";
import { useDispatch, useSelector } from "react-redux";
import { setAnswers } from "../../store/slice/answers/answersSlice";

export const FinalResultPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    //calculate score

    //set final score to score redux state
    dispatch(setScore({}));
    dispatch(setAnswers({}));
    localStorage.removeItem("score");
    localStorage.removeItem("answers");

    navigate("/");
  };

  return (
    <div className="pt-16 bg-backgroundPrimary min-h-screen ">
      <article className="border border-white drop-shadow w-10/12 bg-primary/90 text-white block m-auto pb-24  px-4 md:px-20 h-vh60  shadow-lg rounded-lg">
        {/* pb-25vh md:pb-96 pt-5vh md:pt-32 min-h-fit */}
        <FinalFeedback />
      </article>
      <img
        className="relative -top-32 block m-auto w-56"
        src={gota}
        alt="logo"
      />
      <button
        onClick={handleClick}
        className="max-w-screen-md fixed left-1/2 -translate-x-1/2 bottom-2 drop-shadow w-11/12 bg-primary text-white hover:bg-secondary  block  mb-10 text-center m-auto py-2 shadow-lg rounded-3xl"
      >
        Volver al inicio
      </button>
    </div>
  );
};
