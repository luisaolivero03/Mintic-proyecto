"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useAppContext from "@hooks/useAppContext";

const Form = ({ variant }) => {
  const router = useRouter(); // Hook de nextjs para realizar modificaciones en la url
  const [teacher, setTeacher] = useState({
    userName: "",
    password: "",
  }); // Creacion de estado para almacenar los valores del formulario del profesor
  const { login } = useAppContext(); // Usamos destructuración para extraer unicamente la funcion login

  const handleChangeTeacher = (event) => {
    // Creacion de funcion para controlar lo que pasa cada vez que cambien los inputs del profesor
    setTeacher((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    })); // Modificar el estado manteniendo el valor anterior
  };

  const handleSubmitTeacherForm = () => {
    // Función que se dispara al darle click al boton

    //cambair  "teacher" por student
    login(teacher.userName, teacher.password, "teacher"); // llamar a la funcion login de nuestro contexto global

    router.push("/dashboard"); // redirección al home
  };

  if (variant === "teacher") {
    return (
      <form>
        <label>
          Usuario:
          <input
            type="text"
            name="userName"
            onChange={handleChangeTeacher}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Identificación"
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            onChange={handleChangeTeacher}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Fecha de expedición"
          />
        </label>
        <button onClick={handleSubmitTeacherForm} type="button">
          Ingresar profesor
        </button>
      </form>
    );
  }
  //Formulario estudiante
  return (
    <form>
      <label>
        Identificación:
        <input
          type="text"
          name="Identificación"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Identificación"
        />
      </label>
      <label>
        Fecha de expedición de tú documento:
        <input
          type="date"
          name="Fecha de expedición"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Fecha de expedición"
        />
      </label>
      <button onClick={handleSubmitTeacherForm} type="button">
          Ingresar Estudiante
        </button>
    </form>
  );
};

export default Form;
