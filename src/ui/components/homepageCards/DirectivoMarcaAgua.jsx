import vector from "../../../assets/vector.png";
import directivoMarca from "../../../assets/homePageButtons/directivoMarca.png";

import { useState } from "react";
import { ShareButtons } from "../ShareButtons";

export const DirectivoMarcaAgua = () => {
  const [showShare, setShowShare] = useState(false);

  const handleClick = () => {
    setShowShare(!showShare);
  };
  return (
    <section className="bg-terciary pb-16 rounded-t-3xl">
      <div>
        <img
          className="w-full rounded-t-3xl"
          src={directivoMarca}
          alt="A close up shot of a splash of blue water before a white background"
        />
      </div>
      <h2 className="m-4 font-semibold">Directiva marco del agua</h2>
      <article>
        <div className="flex flex-wrap justify-start mx-3 md:justify-center ">
          <p className="my-1 ms-2 py-1 px-4 bg-primary text-white  text-center  text-xs rounded-3xl font-medium">
            Políticas azules
          </p>
        </div>
        <p className="m-4 pt-4 border-t border-secondary text-sm">
           La DMA es una normativa de la Unión Europea que establece un marco
          para la gestión integrada de los recursos hídricos en los Estados
          miembros. En España, se han implementado políticas y medidas en línea
          con esta directiva, enfocadas en la protección y mejora de la calidad
          de las aguas.
        </p>
        <p className="mt-4 mx-4 text-sm">
          Las "políticas azules" son aquellas políticas y estrategias
          relacionadas con la gestión sostenible del agua, la conservación de
          los recursos hídricos y la protección de los ecosistemas acuáticos.
        </p>
        <p className="m-4  pb-4 border-b border-secondary text-sm">
          Actualmente las políticas nacionales apuestan por los Objetivos de
          Desarrollo Sostenible (ODS) y la Agenda 2030, para reflexionar sobre
          las acciones y transformaciones que se deben acometer para garantizar
          la seguridad hídrica frente al cambio climático y lograr los objetivos
          ambientales ligados al agua, impulsando aspectos sociales del
          desarrollo sostenible que traten de dar solución al reto demográfico. 
        </p>

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
