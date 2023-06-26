import vector from "../../../assets/vector.png";
import recycle from "../../../assets/homePageButtons/recycle.png";
import recycleGraph from "../../../assets/homePageButtons/recycleGraph.png";

import { useState } from "react";
import { ShareButtons } from "../ShareButtons";

export const Reutilizacion = () => {
  const [showShare, setShowShare] = useState(false);

  const handleClick = () => {
    setShowShare(!showShare);
  };
  return (
    <section className="bg-terciary pb-16 rounded-t-3xl">
      <div>
        <img
          className="w-full rounded-t-3xl"
          src={recycle}
          alt="The three arrows of the recycle symbol are watermarked in blue over a close-up image of lake or sea water"
        />
      </div>
      <h2 className="m-4 font-semibold">Reutilización de agua </h2>
      <article>
        <div className="flex flex-wrap justify-start mx-3 md:justify-center ">
          <p className="my-1 ms-2 py-1 px-4 bg-primary text-white  text-center  text-xs rounded-3xl font-medium">
            Reutilización
          </p>
        </div>
        <p className="m-4 pt-4 border-t border-secondary text-sm">
           España es el líder europeo en reutilización de agua, al contar con
          más de 2000 estaciones depuradoras de aguas residuales,  se estima que
          ya reutilizamos más de 400 hm3/año, entre el 7 y el 13% del agua
          residual tratada.
        </p>

        <p className="m-4  pb-4 border-b border-secondary text-sm">
          La política de reutilización de aguas en España se centra en el uso
          eficiente y sostenible del agua tratada. Se establecen criterios de
          calidad para garantizar su seguridad. Se permiten diversos usos, como
          el riego agrícola, el riego urbano, la recarga de acuíferos, los usos
          industriales y los usos recreativos y paisajísticos. Se promueve la
          planificación y gestión de la reutilización a través de planes
          regionales y locales.
        </p>
        <h3 className="ms-4 mb-4 text-sm font-semibold">
          Porcentaje de agua reutilizada 2020
        </h3>
        <div className="block m-auto mx-10">
          <img className="w-full" src={recycleGraph} alt="drought graph" />
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
