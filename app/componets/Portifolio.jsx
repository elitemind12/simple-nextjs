import React from 'react';
import Image from 'next/image';

const Portifolio = () => {
  return (
    <div className='max-w-[1240] mx-auto py-8 text-center'>
        <h1 className='text-2xl font-bold p-4'>Travel Photos</h1>
        <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-3'>
            <Image src='https://images.unsplash.com/photo-1659483952058-bfd462c229a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1030&q=80' alt='/' width='677' height='451' layout='responsive' />
        </div>
        <div className='w-full h-full'>
            <Image src='https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt='/' width='215' height='227' layout='responsive' objectFit='cover' />
        </div>
        <div className='w-full h-full'>
            <Image src='https://images.unsplash.com/photo-1682687220198-88e9bdea9931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt='/' width='215' height='227' layout='responsive' objectFit='cover' />
        </div>
        <div className='w-full h-full'>
            <Image src='https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt='/' width='215' height='227' layout='responsive' objectFit='cover' />
        </div>
        <div className='w-full h-full'>
            <Image src='https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=975&q=80' alt='/' width='215' height='227' layout='responsive' objectFit='cover' />
        </div>
        </div>
    </div>
  )
}

export default Portifolio;