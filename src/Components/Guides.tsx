import React from 'react';
import Link from './Link';
import Card from './Card';
import { data } from '../data';
import Container from './Container';

const Guides = () => {
  return (
    <Container>
      <div className='justify-items-start'>
    
        <h1 className='font-sans hover:Segoe UI font-bold text-3xl text-black'>
          Guides
        </h1>
      <div/>


      <div className='mt-5'>
        <button className='flex hover:translate-x-5 text-md group no-underline border-b  hover:text-blue-600 items-center justify-between py-2 text-gray-600'>Consistency Patterns <p className='text-xs font-medium bg-green-300 ml-1.5 px-1.5 py-0.5 rounded-sm text-green-900 uppercase'>NEW · JANUARY</p></button><hr />
        <button className='hover:translate-x-5 text-md group no-underline border-b flex hover:text-blue-600 items-center justify-between py-2 text-gray-600'>Session Based Authentication<p className='text-xs font-medium bg-green-300 ml-1.5 px-1.5 py-0.5 rounded-sm text-green-900 uppercase'>NEW · NOVEMBER</p></button><hr /> 
        <button className='hover:translate-x-5 text-md group no-underline border-b flex hover:text-blue-600 items-center justify-between py-2 text-gray-600'>HTTP Basic Authentication <p className='text-xs font-medium bg-green-300 ml-1.5 px-1.5 py-0.5 rounded-sm text-green-900 uppercase'>NEW · OCTOBER</p></button><hr />
        <button className='hover:translate-x-5 text-md group no-underline border-b flex hover:text-blue-600 items-center justify-between py-2 text-gray-600'>Basics of Authentication</button><hr />
        <button className='hover:translate-x-5 text-md group no-underline border-b flex hover:text-blue-600 items-center justify-between py-2 text-gray-600'>Async and Defer Script Loading</button><hr />
        <button className='hover:translate-x-5 text-md group no-underline border-b flex hover:text-blue-600 items-center justify-between py-2 text-gray-600'>What are Web Vitals?</button><hr />
        <button className='hover:translate-x-5 text-md group no-underline border-b flex hover:text-blue-600 items-center justify-between py-2 text-gray-600'>SLIs, SLOs and SLAs</button><hr />
      </div>
        
      <div className='mt-4'>
        <button className='rounded-full text-xs px-3 py-2 justify-between items-center no-underline border-b flex text-white text-left bg background bg-gradient-to-r from-slate-600 to-black hover:from-blue-600 hover:to-blue-800 '>View All Videos →</button>
      </div>
      </div>
    </Container>
  )
}

export default Guides