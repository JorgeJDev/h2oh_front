import React from "react";
import { useState, useRef, useEffect } from "react";
import logoText from "../../assets/logoText.png";
import userButton from "../../assets/userButton.svg";
// import martillo from "../../assets/martillo.png";
import { Link, useNavigate } from "react-router-dom";
import { MapContainerComp } from "../../map/components";
import { setVisited } from "../../store/slice/visited/visitedSlice";
import { useDispatch, useSelector } from "react-redux";
import { setVisitedLocal } from "../../helpers/localStorage";
//import info card/buttons
import { DroughtCards } from "../components/homepageButtons/DroughtCards";
import { DroughtLegislation } from "../components/homepageCards/DroughtLegislation";

import { Graphic } from "../../graphic/components/Graphic";

import { PolicyCards } from "../components/homepageButtons/PolicyCards";
import { EmbalsesCards } from "../components/homepageButtons/EmbalsesCards";
import { ReutilizacionCards } from "../components/homepageButtons/ReutilizacionCards";
import { SuministroCards } from "../components/homepageButtons/SuministroCards";
//import info pages
//--sequia
import { SequiaMeteor } from "../components/homepageCards/SequiaMeteor";
import { SequiaAgricola } from "../components/homepageCards/SequiaAgricola";
import { SequiaSocio } from "../components/homepageCards/SequiaSocio";
import { SequiaHidro } from "../components/homepageCards/SequiaHidro";
import { PlanHidro } from "../components/homepageCards/PlanHidro";
import { PlanCuencaHidro } from "../components/homepageCards/PlanCuenaHidro";
import { DirectivoMarcaAgua } from "../components/homepageCards/DirectivoMarcaAgua";
import { ProgramaReutilizacion } from "../components/homepageCards/ProgramaReutilizacion";
import { Reutilizacion } from "../components/homepageCards/Reutilizacion";
import { Embalses } from "../components/homepageCards/Embalses";
import { Suministro } from "../components/homepageCards/Suministro";
//--politicas azules

export const HomePage = () => {
  //collect current visited pages state
  const { visitedObject } = useSelector((state) => state.visited);
  const dispatch = useDispatch();
  const [infoButtons, setInfoButtons] = useState("embalses");
  const [infoTopic, setInfoTopic] = useState("");
  const info = useRef(null);

  //===="CATEGORY" LOGIC====//
  const changeCategory = ({ target }) => {
    setInfoButtons(target.id);
  };

  //====INFO SECTION LOGIC===//
  //function to scroll to info
  const scrollToInfo = () => {
    info.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  //click on info buttons, infoTopic is changed
  const handleClick = ({ target }) => {
    const button = target.closest("button");
    setInfoTopic(button.id);
    //scroll to info section - one millisecond wait to allow component to load
    setTimeout(scrollToInfo, 100);
  };

  //on change of infoTopic
  useEffect(() => {
    console.log(infoTopic);
    // set state that topic has been visited
    if (infoTopic != "") {
      if (visitedObject[infoTopic] === false && visitedObject.score < 10) {
        console.log("here");
        const newScore = visitedObject.score + 2;
        const visitedPages = {
          ...visitedObject,
          [infoTopic]: true,
          score: newScore,
        };
        dispatch(setVisited(visitedPages));
      }
    }
  }, [infoTopic]);

  useEffect(() => {
    setVisitedLocal(visitedObject);
  }, [visitedObject]);

  return (
    <>
      <div
        className={`bg-backgroundPrimary ${
          infoTopic == "" && "min-h-screen pb-20"
        } `}
      >
        <section className="z-101 pb-10">
          <hgroup className="flex justify-between pt-10">
            <h1>
              <img className="mx-5 w-36" src={logoText} alt="logo" />
            </h1>
            <Link to="/profile">
              <img
                className="mx-5"
                src={userButton}
                alt="button to edit user details"
              />
            </Link>
          </hgroup>
          <h2 className="font-bold text-darkBlue text-xs mx-5 my-2 md:text-center">
            Selección de categoría
          </h2>
          <article className="flex flex-wrap justify-start mx-3 md:justify-center">
            <button
              id="policies"
              onClick={changeCategory}
              className={`my-1 ms-2 py-1 px-3 border border-white hover:bg-secondary hover:text-white  ${
                infoButtons == "policies"
                  ? "bg-secondary text-white"
                  : "bg-small-button text-black"
              }  text-center  text-xs rounded-3xl font-medium`}
            >
              Políticas azules
            </button>
            <button
              id="embalses"
              onClick={changeCategory}
              className={`my-1 ms-2 py-1 px-3 border border-white hover:bg-secondary hover:text-white  ${
                infoButtons == "embalses"
                  ? "bg-secondary text-white"
                  : "bg-small-button text-black"
              }  text-center  text-xs rounded-3xl font-medium`}
            >
              Embalses
            </button>
            <button
              id="drought"
              onClick={changeCategory}
              className={`my-1 ms-2 py-1 px-3 border border-white hover:bg-secondary hover:text-white  ${
                infoButtons == "drought"
                  ? "bg-secondary text-white"
                  : "bg-small-button text-black"
              }  text-center  text-xs rounded-3xl font-medium`}
            >
              Sequía
            </button>
            <button
              id="reutilizacion"
              onClick={changeCategory}
              className={`my-1 ms-2 py-1 px-3 border border-white hover:bg-secondary hover:text-white  ${
                infoButtons == "reutilizacion"
                  ? "bg-secondary text-white"
                  : "bg-small-button text-black"
              }  text-center  text-xs rounded-3xl font-medium`}
            >
              Reutilización de agua
            </button>
            <button
              id="suministro"
              onClick={changeCategory}
              className={`my-1 ms-2 py-1 px-3 border border-white hover:bg-secondary hover:text-white  ${
                infoButtons == "suministro"
                  ? "bg-secondary text-white"
                  : "bg-small-button text-black"
              }  text-center  text-xs rounded-3xl font-medium`}
            >
              Suministro de agua
            </button>
          </article>
          {infoButtons == "drought" && (
            <DroughtCards handleClick={handleClick} />
          )}
          {infoButtons == "policies" && (
            <PolicyCards handleClick={handleClick} />
          )}
          {infoButtons == "embalses" && (
            <EmbalsesCards handleClick={handleClick} />
          )}
          {infoButtons == "reutilizacion" && (
            <ReutilizacionCards handleClick={handleClick} />
          )}
          {infoButtons == "suministro" && (
            <SuministroCards handleClick={handleClick} />
          )}

          <div className="border-t my-4 border-secondary mx-4 block m-auto"></div>

          <div className="mt-3 mx-3 mb-2 flex justify-between">
            <p className="text-xs font-bold text-darkBlue">Modelo predictivo</p>
            <Link to="/graphic" className="text-xs text-darkBlue font-medium">
              Ver Gráfico
            </Link>
          </div>

          <div className="relative bg-white h-64  w-full text-center border">
            <div className="absolute top-0 bottom-0 left-0 right-0 z-0">
              <Graphic />
            </div>
          </div>

          <div className="border-t my-4 border-secondary mx-4 block m-auto"></div>

          <div className="mt-3 mx-3 mb-2 flex justify-between">
            <p className="text-xs font-bold text-darkBlue">
              Reservas de agua en España
            </p>
            <Link to="/viewmap" className="text-xs text-darkBlue font-medium">
              Ver mapa
            </Link>
          </div>
          <div className="relative bg-white h-64  w-full text-center border">
            <div className="absolute top-0 bottom-0 left-0 right-0 z-0">
              <MapContainerComp />
            </div>
          </div>
          <Link
            to="/quiz/1"
            className="max-w-screen-md fixed left-1/2 -translate-x-1/2 bottom-2  z-10 my-10 py-3 drop-shadow  w-11/12 bg-primary hover:bg-secondary text-white block  text-center m-auto  shadow-lg rounded-3xl"
          >
            Iniciar encuesta
          </Link>
        </section>
      </div>
      <div className="info" ref={info}>
        {infoTopic == "sequiaMeteorologica" && <SequiaMeteor />}
        {infoTopic == "sequiaAgricola" && <SequiaAgricola />}
        {infoTopic == "sequiaSocioeconomica" && <SequiaSocio />}
        {infoTopic == "sequiaHidrologica" && <SequiaHidro />}
        {infoTopic == "planHidroNacional" && <PlanHidro />}
        {infoTopic == "planCuencaHidro" && <PlanCuencaHidro />}
        {infoTopic == "directivoMarca" && <DirectivoMarcaAgua />}
        {infoTopic == "programaReutilizacion" && <ProgramaReutilizacion />}
        {infoTopic == "reutilizacion" && <Reutilizacion />}
        {infoTopic == "embalses" && <Embalses />}
        {infoTopic == "suministro" && <Suministro />}
      </div>
    </>
  );
};
