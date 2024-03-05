import Image from "next/image";
import Link from "next/link";
import Card from "@components/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconoCalificaciones from '../../img/calificaciones.png';
import IconoHorario from '../../img/horario.png';
import IconoCertificacion from '../../img/certificacion.png';
import fondo from '../../img/fondo.png';

const data1 = {
    username: 'Camilo',
    id: 1002211875,
    role: 'Student'
}
const data2 = {
    username: 'Luisa',
    id: 1002211876,
    role: 'Teacher',
}

// esta es tu url localhost:3000/

export default function Home() {

    return (
        <div className="bg-secondary-gris p-4 ">
            <Card className="bg-secondary-blanco text-black max-w-full h-[calc(100vh-148px)] !p-0 text-xs !rounded-lg ">
                <div className=" bg-primary-500  w-full  p-1  rounded-t-lg  ">
                    <p className="text-white not-italic text-base ml-2 font-semibold">Portal Estudiantil</p>
                </div>
                <div className="flex flex-row justify-around items-center h-full  w-full ">

                    {/* Esto centrará el contenido verticalmente */}
                    {/*   <p className="text-center text-lg ">BIENVENIDOS ¿QUÉ DESEAS ELEGIR?</p> */}

                    <Card className="bg-secondary-blanco-hueso  w-44 h-44 text-xs transition cursor-pointer ${className ? className : 'bg-primary-50 hover:bg-primary-400 text-black hover:text-white border border-primary-500'}">
                        <img className="w-28 h-28 items-center " src={IconoCalificaciones.src} />
                        <Link href="/calificaciones">
                          <p className=" not-italic text-sm font-semibold">CALIFICACIONES</p>  
                        </Link>
                    </Card>

                    <Card className="bg-secondary-blanco-hueso  w-44 h-44 text-xs transition cursor-pointer ${className ? className : 'bg-primary-50 hover:bg-primary-400 text-black hover:text-white border border-primary-500'}">
                        <img className="w-28 h-28 items-center " src={IconoHorario.src} />
                        <Link href="/horario">
                          <p className=" not-italic text-sm font-semibold">HORARIO</p>  
                        </Link>
                    </Card>

                    <Card className="bg-secondary-blanco-hueso  w-44 h-44 text-xs transition cursor-pointer ${className ? className : 'bg-primary-50 hover:bg-primary-400 text-black hover:text-white border border-primary-500'}">
                        <img className="w-28 h-28 items-center " src={IconoCertificacion.src} />
                        <Link href="/calificaciones">
                          <p className=" not-italic text-sm font-semibold text-center">BOLETINES Y CERTIFICADOS</p>  
                        </Link>
                    </Card>

                </div>
            </Card>
        </div>
    );
}
