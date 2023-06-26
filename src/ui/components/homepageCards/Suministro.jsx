import vector from "../../../assets/vector.png";
import suministro from "../../../assets/homePageButtons/suministro.png";
import suministroGraph from "../../../assets/homePageButtons/suministroGraph.png";

import { useState } from "react";
import { ShareButtons } from "../ShareButtons";

export const Suministro = () => {
  const [showShare, setShowShare] = useState(false);

  const handleClick = () => {
    setShowShare(!showShare);
  };
  return (
    <section className="bg-terciary pb-16 rounded-t-3xl">
      <div className="rounded-t-3xl">
        <img
          className="w-full rounded-t-3xl"
          src={suministro}
          alt="Water flowing from tap into trough"
        />
      </div>
      <h2 className="m-4 font-semibold">Coste suministro por habitante</h2>
      <article>
        <div className="flex flex-wrap justify-start mx-3 md:justify-center ">
          <p className="my-1 ms-2 py-1 px-4 bg-primary text-white  text-center  text-xs rounded-3xl font-medium">
            Suministro
          </p>
        </div>
        <p className="m-4 pt-4 border-t border-secondary text-sm">
          El coste del suministro de agua en España se compone de una tarifa
          fija y una tarifa variable en función del consumo. Las tarifas pueden
          variar de una compañía de suministro a otra y también pueden haber
          diferencias entre áreas urbanas y rurales.
        </p>

        <p className="m-4  pb-4 border-b border-secondary text-sm">
          El coste del suministro de agua por habitante en España puede variar
          dependiendo de diferentes factores, como la región, el sistema de
          abastecimiento, el tipo de consumo (doméstico, industrial, agrícola) y
          las tarifas establecidas por cada compañía o entidad responsable del
          suministro de agua.
        </p>
        <h3 className="ms-4 mb-4 text-sm font-semibold">
          Coste público del suministro 2020 por persona/año en €
        </h3>
        <div className="block m-auto">
          <img
            className="w-1/2 block m-auto"
            src={suministroGraph}
            alt="Graph Coste público del suministro 2020 por persona/año en €"
          />
        </div>
        <div className="m-6 flex justify-between">
          <button onClick={handleClick} className="mb-8 px-2 py-2 drop-shadow ">
            <img className="" src={vector} alt="share on social media" />
          </button>
          {showShare && (
            <ShareButtons
              url={"megustalapizza.com"}
              title={"Me gusta la pizza"}
              handleClick={handleClick}
            />
          )}
          <button className="mb-8 px-5 py-2 drop-shadow w-content border border-terciary bg-secondary hover:bg-primary text-white text-center  shadow-lg rounded-3xl">
            +info
          </button>
        </div>
      </article>
    </section>
  );
};
