"use client";
import Image from "next/image";
import Link from "next/link";
import Card from "@components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconoCalificaciones from "../../img/calificaciones.png";
import IconoHorario from "../../img/horario.png";
import IconoCertificacion from "../../img/certificacion.png";
import IconoBoletin from "../../img/boletin-informativo.png";
import fondo from "../../img/fondo.png";
import useAppContext from "@hooks/useAppContext";

const data1 = {
  username: "Camilo",
  id: 1002211875,
  role: "Student",
};
const data2 = {
  username: "Luisa",
  id: 1002211876,
  role: "Teacher",
};

// esta es tu url localhost:3000/

export default function Home() {
  const { user } = useAppContext(); // Usamos destructuración para extraer unicamente la funcion login

  return (
    <div className="bg-secondary-gris p-4 ">
      <Card className="bg-secondary-blanco text-black max-w-full h-[calc(100vh-148px)] !p-0 text-xs !rounded-lg ">
        <div className=" bg-primary-500  w-full  p-1  rounded-t-lg  ">
          <p className="text-white not-italic text-base ml-2 font-semibold">
            Portal Estudiantil
          </p>
        </div>
        <div className="flex flex-row justify-around items-center h-full  w-full ">
          {/* Esto centrará el contenido verticalmente */}
          {/*   <p className="text-center text-lg ">BIENVENIDOS ¿QUÉ DESEAS ELEGIR?</p> */}
          <Link href="/calificaciones">
            <Card className="bg-secondary-blanco-hueso w-44 h-44 text-xs transition cursor-pointer hover:bg-primary-400 text-black hover:text-white border">
              <img
                className="w-28 h-28 items-center "
                src={IconoCalificaciones.src}
              />
              <p className=" not-italic text-sm font-semibold">
                CALIFICACIONES
              </p>
            </Card>
          </Link>

          <Link href="/horarios">
            <Card className="bg-secondary-blanco-hueso w-44 h-44 text-xs transition cursor-pointer hover:bg-primary-400 text-black hover:text-white border">
              <img className="w-28 h-28 items-center " src={IconoHorario.src} />
              <p className=" not-italic text-sm font-semibold">HORARIO</p>
            </Card>
          </Link>

          <Link href="/boletines">
            <Card className="bg-secondary-blanco-hueso w-44 h-44 text-xs transition cursor-pointer hover:bg-primary-400 text-black hover:text-white border">
              <img className="w-28 h-28 items-center " src={IconoBoletin.src} />
              <p className=" not-italic text-sm font-semibold text-center">
                BOLETINES
              </p>
            </Card>
          </Link>
          {user.role === "teacher" && (
            <Link href="/certificados">
              <Card className="bg-secondary-blanco-hueso w-44 h-44 text-xs transition cursor-pointer hover:bg-primary-400 text-black hover:text-white border">
                <img
                  className="w-28 h-28 items-center "
                  src={IconoCertificacion.src}
                />
                <p className=" not-italic text-sm font-semibold text-center">
                  CERTIFICADOS
                </p>
              </Card>
            </Link>
          )}
        </div>
      </Card>
    </div>
  );
}
