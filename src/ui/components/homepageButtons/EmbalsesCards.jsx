import React from "react";
import embalses from "../../../assets/homePageButtons/embalses.png";

export const EmbalsesCards = ({ handleClick }) => {
  return (
    <article>
      <button
        id="embalses"
        onClick={handleClick}
        className="m-0 z-10 mb-8 mt-4 drop-shadow w-11/12 border border-terciary bg-terciary hover:bg-primary text-darkBlue font-mediumm block  text-center m-auto shadow-lg rounded-2xl"
      >
        <div className="h-24 sm:h-40 overflow-hidden">
          <img
            className="w-full rounded-t-2xl"
            src={embalses}
            alt="Photo of an embalse taken from a high vantage point"
          />
        </div>
        <p className="my-2">Embalses</p>
      </button>
    </article>
  );
};
