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

  const [student, setStudent] = useState({
    userName: "",
    password: "",
  });

  const { login } = useAppContext(); // Usamos destructuración para extraer unicamente la funcion login

  const handleChangeTeacher = (event) => {
    // Creacion de funcion para controlar lo que pasa cada vez que cambien los inputs del profesor
    setTeacher((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    })); // Modificar el estado manteniendo el valor anterior
  };

  const handleChangeStudent = (event) => {
    setStudent((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmitForm = () => {
    if (variant === "teacher") {
      login(teacher.userName, teacher.password, "teacher");
    } else {
      login(student.userName, student.password, "student");
    }
    router.push("/dashboard");
  };

  //Formulario profesor

  if (variant === "teacher") {
    return (
      <form>
  <label className="text-white">
    Usuario:
    <input
      type="text"
      name="userName"
      onChange={handleChangeTeacher}
      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
      placeholder="Identificación"
    />
  </label>
  <label className="text-white">
    Contraseña:
    <input
      type="password"
      name="password"
      onChange={handleChangeTeacher}
      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
      placeholder="Fecha de expedición"
    />
  </label>
  <button onClick={handleSubmitForm} type="button" className="text-white">
    Ingresar profesor
  </button>
</form>

    );
  }
  //Formulario estudiante
  return (
    <form>
  <label className="text-white">
    Identificación:
    <input
      type="text"
      name="Identificación"
      onChange={handleChangeStudent}
      className="mt-1 px-3 py-2 bg-white text-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
      placeholder="Identificación"
    />
  </label>
  <label className="text-white">
    Fecha de expedición de tu documento:
    <input
      type="date"
      name="Fecha de expedición"
      onChange={handleChangeStudent}
      className="mt-1 px-3 py-2 bg-white text-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
      placeholder="Fecha de expedición"
    />
  </label>
  <button onClick={handleSubmitForm} type="button" className="text-white">
    {variant === "teacher" ? "Ingresar Profesor" : "Ingresar Estudiante"}
  </button>
</form>


  );
};

export default Form;
