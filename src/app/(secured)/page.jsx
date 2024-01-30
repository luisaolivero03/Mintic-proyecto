import Image from "next/image";
import Link from "next/link";

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

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            Hola pagina principal
            {data1.role === 'Teacher' ? (<p>Esto lo ve el profesor</p>) : (<p>Esto lo ve el Estudiante</p>)}
            <button>{data1.role === 'Teacher' ? 'Administrar Calificaciones' : 'Ver calificaciones'}</button>
            <Link href="/login">Login</Link>
        </main>
    );
}
