import { ABOUT_US_TEXT } from '@/constants';
import React from 'react'

const AboutMX = () => {
  return (
    <div className='container mx-auto my-8  pb-10' id='AcercaDe'>
        <div className='mb-8'>
            <h2 className='mb-20 text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl'>Acerca de Nosotros</h2>
            <p className='py-6 text-center text-lg tracking-tighter lg:pr-20'>{ABOUT_US_TEXT}</p>
        </div>
        <div className='flex flex-wrap text-center'>
            <div className='w-full border-neutral-700 p-6 lg:w-1/2 lg:border-r'>
                <p className='bg-gradient-to-r from-purple-400 via-pink-500 to-purple-800 bg-clip-text text-5xl text-transparent
                lg:text-7xl'>1000+</p>
                <p className='my-8 font-medium'>Cleintes Desde 2019</p>
            </div>
            <div className='w-full p-6 lg:w-1/2'>
                <p className='bg-gradient-to-r from-green-400  to-green-800 bg-clip-text text-5xl text-transparent
                lg:text-7xl'>3000+</p>
                <p className='my-8 font-medium'>Propiedades Vendidas!</p>
            </div>
        </div>
    </div>
  )
}

export default AboutMX;