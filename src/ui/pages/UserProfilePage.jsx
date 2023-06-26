import React from "react";
import { Link, useNavigate } from "react-router-dom";

import backButton from "../../assets/backButton.svg";
import { AddUserForm } from "../components/AddUserForm";

export const UserProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background">
      <section>
        <div className="flex pt-12 mx-5">
          <button onClick={() => navigate(-1)}>
            <img src={backButton} alt="left arrow" />
          </button>
          <h1 className="text-center  ms-[calc(50%-8rem)] mt-2">
            Datos personales
          </h1>
        </div>
        <AddUserForm />
      </section>
    </div>
  );
};
