import React from "react";
import { useState } from "react";
import gota from "../../assets/gota.png";
import { Feedback1 } from "../components/Feedback1";
import { Feedback2 } from "../components/Feedback2";
import { Feedback3 } from "../components/Feedback3";
import { Feedback4 } from "../components/Feedback4";
import { Feedback5 } from "../components/Feedback5";
import { Feedback6 } from "../components/Feedback6";
import { Feedback7 } from "../components/Feedback7";
import { Feedback8 } from "../components/Feedback8";

import { Link, useParams, useNavigate } from "react-router-dom";
import { FinalFeedback } from "../components/FinalFeedback";
import { useDispatch, useSelector } from "react-redux";
import { consultation } from "../../api/fetch";
import { setScore } from "../../store/slice/score/scoreSlice";

export const FeedbackPage = () => {
  const { number } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //collect states
  const { answersObject } = useSelector((state) => state.answers);
  const { visitedObject } = useSelector((state) => state.visited);
  const { scoreObject } = useSelector((state) => state.score);

  //after last page - send results to fetch
  const handleClick = async () => {
    //calculate score
    const totalAnswersScore = Object.values(scoreObject).reduce(
      (acc, value) => acc + parseInt(value * 10),
      0
    );

    //set final score to score redux state
    dispatch(
      setScore({
        ...scoreObject,
        finalScore: totalAnswersScore + visitedObject.score,
      })
    );

    //collect user id
    const user = localStorage.getItem("id");

    //check if user already has entry
    const userUrl = `https://h2ohback.onrender.com/api/v1/entries/${user}`;
    const request = await consultation(userUrl);
    console.log(request);

    //define body for fetch
    const body = {
      questions: { ...answersObject },
      status: { ...visitedObject },
      user,
      score: totalAnswersScore + visitedObject.score,
    };
    //if use already exists, make PUT
    if (request.ok) {
      const url = `${import.meta.env.VITE_RESULT_URL}/${user}`;
      console.log("in PUT", url);
      const method = "PUT";
      //consultation(url, method, body);
    } else {
      //if user doens´t have entry, make POST

      const url = import.meta.env.VITE_RESULT_URL;
      console.log("in POST", url, body);
      const method = "POST";
      //consultation(url, method, body);
    }
    navigate("/final");
  };

  return (
    <div className="pt-16 bg-backgroundPrimary min-h-screen ">
      <article
        className={`border border-white drop-shadow w-10/12 bg-primary/90 text-white block m-auto pb-20   px-4 md:px-20 ${
          number == 2 ? "h-vh80" : "h-vh70"
        }  min-h-fit shadow-lg rounded-lg`}
      >
        {number == 1 && <Feedback1 />}
        {number == 2 && <Feedback2 />}
        {number == 3 && <Feedback3 />}
        {number == 4 && <Feedback4 />}
        {number == 5 && <Feedback5 />}
        {number == 6 && <Feedback6 />}
        {number == 7 && <Feedback7 />}
        {number == 8 && <Feedback8 />}
      </article>
      <img
        className="relative -top-32 block m-auto w-56"
        src={gota}
        alt="logo"
      />
      {number == 8 ? (
        <button
          onClick={handleClick}
          className="max-w-screen-md fixed left-1/2 -translate-x-1/2 bottom-2 drop-shadow w-11/12 bg-primary text-white hover:bg-secondary  block  mb-10 text-center m-auto py-3 shadow-lg rounded-3xl"
        >
          Siguiente
        </button>
      ) : (
        <Link
          to={`/quiz/${parseInt(number) + 1}`}
          className="max-w-screen-md fixed left-1/2 -translate-x-1/2 bottom-2 drop-shadow w-11/12 bg-primary text-white hover:bg-secondary  block  mb-10 text-center m-auto py-3 shadow-lg rounded-3xl"
        >
          Siguiente pregunta
        </Link>
      )}
    </div>
  );
};
