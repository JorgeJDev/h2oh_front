import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSignup } from "../../hooks/useSignup";
import { Link } from "react-router-dom";

export const SignupForm = () => {
  const { register, formState: { errors }, handleSubmit } = useForm({ mode: "all" });
  const [ccaa, setCcaa] = useState("");
  const [provider, setProvider] = useState("");

  const comunidadesAutonomas = [
    "Andalucia",
    "Aragon",
    "Asturias",
    "Baleares",
    "Canarias",
    "Cantabria",
    "Castilla y Leon",
    "Castilla-La Mancha",
    "Cataluña",
    "Extremadura",
    "Galicia",
    "La Rioja",
    "Madrid",
    "Murcia",
    "Navarra",
    "Pais Vasco",
    "Valencia"
  ];

  const { singUp } = useSignup(); // Obtener la función 'singUp' del hook 'useSignup'

  const onSubmit = async (data) => {
    
    const body = {
      email: data.email,
      password: data.password,
      ccaa: data.ccaa
    }

    await singUp(body, 'register'); 
   
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center my-2">
        <img
          src="https://dorian-rose.github.io/politicas_azules_logo/politicas_azules_logo.png"
          className="h-auto w-1/3 md:w-1/6"
          alt="Logo"
        />
      </div>

      <form className="p-5 font-sans flex flex-col items-center my-2 w-full sm:w-3/4 md:w-2/3 lg:w-1/2" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="font-sans flex flex-col my-2 w-full">Crea un usuario</h3>
        <input
          {...register("email", {
            required: "Please enter an email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          className="mt-1 border border-form-border tracking-wide text-sm placeholder:text-black px-3 h-10 bg-gray-200 focus:outline-none focus:border-2 focus:border-solid rounded-md w-full"
        />
        <p className="mb-2 font-thin italic text-emphasis">
          {errors.email?.message}
        </p>
        <input
          {...register("password", {
            required: "Please enter a password",
            minLength: {
              value: 6,
              message: "Password must have at least 6 characters",
            },
          })}
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          className="mt-1 border border-form-border tracking-wide text-sm placeholder:text-black px-3 h-10 bg-gray-200 focus:outline-none focus:border-2 focus:border-solid rounded-md w-full"
        />
        <p className="mb-2 font-thin italic text-emphasis">
          {errors.password?.message}
        </p>

        <select
          {...register("ccaa", {
            required: "Please select a province",
          })}
          value={ccaa}
          onChange={(e) => setCcaa(e.target.value)}
          className="mt-1 border border-form-border tracking-wide text-sm placeholder:text-black px-3 h-10 bg-gray-200 focus:outline-none focus:border-2 focus:border-solid rounded-md w-full"
        >
          <option value="">Seleccione una Comunidad Autónoma</option>
          {comunidadesAutonomas.map((comunidad) => (
            <option key={comunidad} value={comunidad}>
              {comunidad}
            </option>
          ))}
        </select>
        <p className="mb-2 font-thin italic text-emphasis">
          {errors.ccaa?.message}
        </p>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full sm:w-3/4 md:w-2/3 lg:w-1/2 my-2"
        >
          CREAR USUARIO
        </button>
      </form>

      <div className="flex flex-col items-center justify-center my-2">
        <p>O entra con</p>
        <div className="flex mt-2 space-x-2">
          <button
            type="button"
            onClick={() => setProvider("google")}
            className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200"
          >
            <img src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" alt="Google" className="w-3 h-3" />
          </button>
          <button
            type="button"
            onClick={() => setProvider("facebook")}
            className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/640px-Facebook_Logo_%282019%29.png" alt="Facebook" className="w-3 h-3" />
          </button>
          <button
            type="button"
            onClick={() => setProvider("apple")}
            className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200"
          >
            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c516.png" alt="Apple" className="w-3 h-3" />
          </button>
        </div>
      </div>

      <footer className="fixed inset-x-0 bottom-0 flex justify-center items-center">
        <Link to="/terms">Términos y condiciones</Link>
      </footer>
    </div>
  );
};
