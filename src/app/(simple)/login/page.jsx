'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChalkboardTeacher, faChalkboardUser, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Imagenizq from '../../../img/6737457-removebg-preview.png'

const Login = () => {
    const [selectedTab, setSelectedTab] = useState(null);
    return (
        <div className='h-screen relative flex items-center justify-center'>
            <div className='absolute top-0 left-0 w-full h-full z-0'>
                <svg xmlns="http://www.w3.org/2000/svg" id="visual" viewBox="0 0 900 600" version="1.1"><path d="M0 55L30 58C60 61 120 67 180 72C240 77 300 81 360 75C420 69 480 53 540 54C600 55 660 73 720 79C780 85 840 79 870 76L900 73L900 0L870 0C840 0 780 0 720 0C660 0 600 0 540 0C480 0 420 0 360 0C300 0 240 0 180 0C120 0 60 0 30 0L0 0Z" fill="#3a9b77" /><path d="M0 109L30 111C60 113 120 117 180 121C240 125 300 129 360 121C420 113 480 93 540 100C600 107 660 141 720 154C780 167 840 159 870 155L900 151L900 71L870 74C840 77 780 83 720 77C660 71 600 53 540 52C480 51 420 67 360 73C300 79 240 75 180 70C120 65 60 59 30 56L0 53Z" fill="#2b8c68" /><path d="M0 253L30 240C60 227 120 201 180 202C240 203 300 231 360 233C420 235 480 211 540 204C600 197 660 207 720 216C780 225 840 233 870 237L900 241L900 149L870 153C840 157 780 165 720 152C660 139 600 105 540 98C480 91 420 111 360 119C300 127 240 123 180 119C120 115 60 111 30 109L0 107Z" fill="#1b7c59" /><path d="M0 325L30 318C60 311 120 297 180 299C240 301 300 319 360 318C420 317 480 297 540 287C600 277 660 277 720 278C780 279 840 281 870 282L900 283L900 239L870 235C840 231 780 223 720 214C660 205 600 195 540 202C480 209 420 233 360 231C300 229 240 201 180 200C120 199 60 225 30 238L0 251Z" fill="#106f4e" /><path d="M0 505L30 486C60 467 120 429 180 427C240 425 300 459 360 455C420 451 480 409 540 410C600 411 660 455 720 472C780 489 840 479 870 474L900 469L900 281L870 280C840 279 780 277 720 276C660 275 600 275 540 285C480 295 420 315 360 316C300 317 240 299 180 297C120 295 60 309 30 316L0 323Z" fill="#0e6245" /><path d="M0 601L30 601C60 601 120 601 180 601C240 601 300 601 360 601C420 601 480 601 540 601C600 601 660 601 720 601C780 601 840 601 870 601L900 601L900 467L870 472C840 477 780 487 720 470C660 453 600 409 540 408C480 407 420 449 360 453C300 457 240 423 180 425C120 427 60 465 30 484L0 503Z" fill="#0c563d" /></svg>
            </div>
            <div className='relative flex flex-col items-center gap-4 p-10 justify-center z-10 rounded-xl bg-primary-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 '>


                <div className='flex flex-row gap-4 '>
                    <img className='h-96 w-96'
                        src={Imagenizq.src}
                    />
                    <div className='flex flex-col gap-4 justify-center items-center  '>
                        <h1 className='text-white text-2xl font-bold justify-center text-center'>BIENVENIDOS <br />
                            AL PORTAL INSTITUCIONAL</h1>
                        <p className='text-white text-base font-semibold justify-center text-center'>Selecciona tu rol: </p>

                        {!selectedTab ? (
                            <div className='flex flex-row gap-4 justify-center items-center'>

                                <Card onClick={() => {
                                    setSelectedTab('student')
                                }}>
                                    <FontAwesomeIcon icon={faGraduationCap} className='w-14 h-14' />
                                    <span>Estudiantes</span>
                                </Card>
                                <Card onClick={() => {
                                    setSelectedTab('teacher')
                                }}>
                                    <FontAwesomeIcon icon={faChalkboardUser} className='w-14 h-14' />
                                    <span>Profesores</span>
                                </Card>

                            </div>
                        ) : (<Form variant={selectedTab} />)}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login;

const Form = ({ variant }) => {
    if (variant === 'teacher') {
        return <div>
            <form>
                <label class="block">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Usuario:
                    </span>
                    <input type="Identificación" name="Identificación" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Identificación" />
                </label>
            </form>

            <form>
                <label class="block">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Contraseña:
                    </span>
                    <input type="Fecha de expedicion" name="Fecha de expedición" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Fecha de expedición" />
                </label>
            </form>

        </div>
    }
    //Formulario estudiante
    return <div>
        <form>
            <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Identificación:
                </span>
                <input type="Identificación" name="Identificación" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Identificación" />
            </label>
        </form>

        <form>
            <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Fecha de expedición de tú documento:
                </span>
                <input type="Fecha de expedicion" name="Fecha de expedición" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Fecha de expedición" />
            </label>
        </form>



    </div>
}

const Card = ({ children, ...props }) => {
    return (
        <div className='p-4 bg-primary-50 flex flex-col items-center rounded-lg border border-primary-500 shadow-md text-primary-500 hover:text-white hover:bg-primary-400 transition cursor-pointer' {...props}>{children}</div>
    )
}
