import React from 'react'
import Link from 'next/link'
const LINKS = [
    {
        label: 'Inicio',
        href: '/palas'
    },
    {
        label: 'Calificaciones',
        href: '/calificaciones'
    },
    {
        label: 'Horarios',
        href: '/horarios'
    },
]

const LayoutPalas = ({children}) => {
  return (
    <div className='relative h-full'>
        <div className='absolute top-0 left-0 h-2/5 w-full bg-primary-900 -z-[1]'></div>
        <nav className='flex flex-row gap-4 p-3'>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
            {LINKS.map((item, index) => (
                <Link href={item.href}>
                    <div className='py-2 px-3 text-white hover:bg-opacity-75 hover:bg-primary-800 rounded-lg text-sm'>
                        {item.label}
                    </div>
                </Link>
            ))}
        </nav>
        {children}
        <footer></footer>
    </div>
  )
}

export default LayoutPalas