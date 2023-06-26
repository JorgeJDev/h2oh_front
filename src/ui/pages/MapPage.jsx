import React from "react";
import { MapContainerComp } from "../../map/components";
import backButton from "../../assets/backButton.svg";
import logoText from "../../assets/logoText.png";
import { Link, useNavigate } from "react-router-dom";

export const MapPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative top-9 bg-background flex shadow-md z-10">
        <button className="ms-4" onClick={() => navigate(-1)}>
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
      <div className="absolute top-0 bottom-0 left-0 right-0 z-0">
        <MapContainerComp />
      </div>
      <Link
        to="/quiz/1"
        className="fixed left-1/2 -translate-x-1/2 bottom-2  z-10 my-10 py-3 drop-shadow  w-11/12 bg-primary hover:bg-secondary text-white block  text-center m-auto  shadow-lg rounded-3xl"
      >
        Iniciar encuesta
      </Link>
    </>
  );
};
