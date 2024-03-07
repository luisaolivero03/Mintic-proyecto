"use client";
import React from "react";
import Link from "next/link";
import Card from "@components/Card";
import useAppContext from "@hooks/useAppContext";
import IconoCalificaciones from "../../img/calificaciones.png";
import IconoHorario from "../../img/horario.png";
import IconoCertificacion from "../../img/certificacion.png";
import IconoBoletin from "../../img/boletin-informativo.png";

export default function Home() {
  const { user } = useAppContext();

  return (
    <div className="bg-secondary-gris p-4 relative">
       <Card className="bg-secondary-blanco text-black max-w-full h-[calc(100vh-148px)] !p-0 text-xs !rounded-lg">
        <div className="bg-primary-500 w-full p-1 rounded-t-lg">
          <p className="text-white not-italic text-base ml-2 font-semibold">
            Portal Academico
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-around items-center h-full w-full">
          <Link href="/dashboard/calificaciones">
            <Card className="bg-secondary-blanco-hueso w-44 h-44 text-xs transition cursor-pointer hover:bg-primary-400 text-black hover:text-white border lg:w-full lg:mb-4">
              <img className="w-28 h-28 items-center" src={IconoCalificaciones.src} />
              <p className="not-italic text-sm font-semibold">CALIFICACIONES</p>
            </Card>
          </Link>

          <Link href="/dashboard/horarios">
            <Card className="bg-secondary-blanco-hueso w-44 h-44 text-xs transition cursor-pointer hover:bg-primary-400 text-black hover:text-white border lg:w-full lg:mb-4">
              <img className="w-28 h-28 items-center" src={IconoHorario.src} />
              <p className="not-italic text-sm font-semibold">HORARIO</p>
            </Card>
          </Link>

          <Link href="/dashboard/boletines">
            <Card className="bg-secondary-blanco-hueso w-44 h-44 text-xs transition cursor-pointer hover:bg-primary-400 text-black hover:text-white border lg:w-full lg:mb-4">
              <img className="w-28 h-28 items-center" src={IconoBoletin.src} />
              <p className="not-italic text-sm font-semibold text-center">BOLETINES</p>
            </Card>
          </Link>

          {user.role === "teacher" && (
            <Link href="/dashboard/certificados">
              <Card className="bg-secondary-blanco-hueso w-44 h-44 text-xs transition cursor-pointer hover:bg-primary-400 text-black hover:text-white border lg:w-full">
                <img className="w-28 h-28 items-center" src={IconoCertificacion.src} />
                <p className="not-italic text-sm font-semibold text-center">CERTIFICADOS</p>
              </Card>
            </Link>
          )}
        </div>
      </Card>
    </div>
  );
}
