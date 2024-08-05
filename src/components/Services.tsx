import { SERVICES_TEXT } from '@/constants';
import Image from 'next/image';
import React from 'react'

const Services = () => {
  return (
    <div className='container mx-auto my-8 border-b pb-10' id='Servicios'>
        <h2 className='mb-20 text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl'>Servicios</h2>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='p-6'>
                    <Image className='rounded-xl object-cover' src="/service.jpeg" width={600} height={600} alt="servivios"/>
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <h2 className='mt-10 text-5xl lg:text-7xl'>
                    Estamos <span className='leading-snug lg:block'>Disponibles en los </span>
                    <span className='font-bold'> 32 Estados de la Republica!</span>
                </h2>
                <p className='mx-w-xl py-6 text-lg tracking-tighter lg:pr-20'><span className='font-bold'>Compra: </span> {SERVICES_TEXT}</p>
            </div>
        </div>
    </div>
  )
}

export default Services;