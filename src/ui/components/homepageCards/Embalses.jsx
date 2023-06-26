import vector from "../../../assets/vector.png";
import embalses from "../../../assets/homePageButtons/embalses.png";
import embalsesCapacidad from "../../../assets/homePageButtons/embalsesCapacidad.png";

import { useState } from "react";
import { ShareButtons } from "../ShareButtons";

export const Embalses = () => {
  const [showShare, setShowShare] = useState(false);

  const handleClick = () => {
    setShowShare(!showShare);
  };
  return (
    <section className="bg-terciary pb-16 rounded-t-3xl">
      <div>
        <img
          className="w-full rounded-t-3xl"
          src={embalses}
          alt="Photo of an embalse taken from above, the water is blue-green and the wall of the embalse can be seen in the forefront"
        />
      </div>
      <h2 className="m-4 font-semibold">Embalses </h2>
      <article>
        <div className="flex flex-wrap justify-start mx-3 md:justify-center ">
          <p className="my-1 ms-2 py-1 px-4 bg-primary text-white  text-center  text-xs rounded-3xl font-medium">
            Embalses
          </p>
        </div>
        <p className="m-4 pt-4 border-t border-secondary text-sm ">
          España cuenta con una amplia red de embalses distribuidos por todo el
          territorio. Cumplen diversas funciones, como el abastecimiento de agua
          potable, la regulación del caudal de los ríos, la generación de
          energía hidroeléctrica y el riego agrícola.
        </p>

        <p className="m-4  pb-4 border-b border-secondary text-sm">
          Los principales sistemas hidrográficos que cuentan con mayor número de
          embalses son el río Ebro, Tajo, Duero, Guadalquivir y Júcar. Estos
          varían en tamaño y capacidad de almacenamiento, desde embalses más
          pequeños destinados al riego local hasta grandes reservas de agua que
          abastecen a grandes áreas y generan electricidad a gran escala.
        </p>
        <h3 className="ms-4 mb-4 text-sm font-semibold">
          Capacidad de los embalses en hm3 2020
        </h3>
        <div className="block m-auto mx-6">
          <img className="w-full" src={embalsesCapacidad} alt="drought graph" />
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
