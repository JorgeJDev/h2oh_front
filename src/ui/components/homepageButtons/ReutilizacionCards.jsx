import React from "react";
import recycle from "../../../assets/homePageButtons/recycle.png";

export const ReutilizacionCards = ({ handleClick }) => {
  return (
    <article>
      <button
        id="reutilizacion"
        onClick={handleClick}
        className="m-0 z-10 mb-8 mt-4 drop-shadow w-11/12 border border-terciary bg-terciary hover:bg-primary text-darkBlue font-medium block  text-center m-auto shadow-lg rounded-2xl"
      >
        <div className="h-28 sm:h-60 overflow-hidden rounded-t-2xl">
          <img
            className="w-full relative -top-1/2 mt-8 md:mt-20 rounded-t-2xl"
            src={recycle}
            alt="Photo of an embalse taken from a high vantage point"
          />
        </div>
        <p className="my-2">Reutilización</p>
      </button>
    </article>
  );
};
