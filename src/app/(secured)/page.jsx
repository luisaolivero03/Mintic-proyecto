import Image from "next/image";
import Link from "next/link";
import Card from "@components/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconoCalificaciones from '../../img/icons8-calificaciones-40.png';
import IconoHorario from '../../img/horario.png';
import Iconoboletinesycertificados from '../../img/boletinesycertificados.png';

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
        <main className="flex flex-col items-center justify-between" style={{ height: '100vh', overflow: 'hidden' }}>
  BIENVENIDOS ¿QUÉ DESEAS ELEGIR?
  <div
    className='flex flex-row gap-10 justify-center items-center'
    style={{
      backgroundImage: "url(/fondodecalificaciones.png)",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100%',
      height: '100%', // Ajusta la altura al 100% para cubrir toda la pantalla
      margin: '0 auto',
    }}
  >
    <Card className="bg-primary-500 text-white" style={{ backgroundColor: "#BCECD1", color: "black" }}>
      <img src={IconoCalificaciones.src} alt="Icono de Calificaciones" />
      <Link href="/calificaciones">
        CALIFICACIONES
      </Link>
    </Card>

    <Card className="bg-primary-500 text-white" style={{ backgroundColor: "#BCECD1", color: "black" }}>
      <img src={IconoHorario.src} alt="Icono de Horario" />
      <Link href="/horarios">
        HORARIOS
      </Link>
    </Card>

    <Card className="bg-primary-500 text-white" style={{ backgroundColor: "#BCECD1", color: "black" }}>
      <img src={Iconoboletinesycertificados.src} alt="Icono de Boletines y Certificados" />
      <Link href="/boletinycertificados"> 
        BOLETINES Y CERTIFICADOS
      </Link>
    </Card>
  </div>
</main>

    )}