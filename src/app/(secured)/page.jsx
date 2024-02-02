import Image from "next/image";
import Link from "next/link";
import Card from "@components/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconoCalificaciones from '../../img/icons8-calificaciones-40.png';

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
        <main className="flex flex-col items-center justify-between">
            BIENVENIDOS ¿QUE DESEAS ELEGIR?
            <div className='flex flex-row gap-4 justify-center items-center'>
                <Card className="bg-primary-500 text-white">
                    <img src= {IconoCalificaciones.src}/>
                    <Link href="/calificaciones">
                        CALIFICACIONES

                    </Link>
                </Card>


                <Card className="bg-primary-500 text-white">
                    <Link href="/horario">
                        HORARIOS

                    </Link>
                </Card> 

                <Card className="bg-primary-500 text-white">
                <Link href="/boletinycertificados"> BOLETINES Y CERTIFICADOS
                
                </Link>
                </Card>
            </div>
        </main>
    );
}
