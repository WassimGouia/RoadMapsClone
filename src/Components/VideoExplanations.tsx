import React from 'react'
import Container from './Container'

const VideoExplanations = () => {
  return (
    <Container>
      <div className='justify-items-start'>
    
        <h1 className='font-sans hover:Segoe UI font-bold text-3xl text-black'>
         Videos
        </h1>
      <div/>


      <div className='mt-5'>
        <button className='flex hover:translate-x-5 text-md group no-underline border-b  hover:text-blue-600 items-center justify-between py-2 text-gray-600'>Session Based Authentication <p className='text-xs font-medium bg-green-300 ml-1.5 px-1.5 py-0.5 rounded-sm text-green-900 uppercase'>NEW · NOVEMBER</p></button><hr />
        <button className='hover:translate-x-5 text-md group no-underline border-b flex hover:text-blue-600 items-center justify-between py-2 text-gray-600'>Basic Authentication<p className='text-xs font-medium bg-green-300 ml-1.5 px-1.5 py-0.5 rounded-sm text-green-900 uppercase'>NEW · OCTOBER</p></button><hr /> 
        <button className='hover:translate-x-5 text-md group no-underline border-b flex hover:text-blue-600 items-center justify-between py-2 text-gray-600'>Basics of Authentication<p className='text-xs font-medium bg-green-300 ml-1.5 px-1.5 py-0.5 rounded-sm text-green-900 uppercase'>NEW · SEPTEMBER</p></button><hr />
        <button className='hover:translate-x-5 text-md group no-underline border-b flex hover:text-blue-600 items-center justify-between py-2 text-gray-600'>Graph Data Structure</button><hr />
        <button className='hover:translate-x-5 text-md group no-underline border-b flex hover:text-blue-600 items-center justify-between py-2 text-gray-600'>Heap Data Structure</button><hr />
        <button className='hover:translate-x-5 text-md group no-underline border-b flex hover:text-blue-600 items-center justify-between py-2 text-gray-600'>Tree Data Structure</button><hr />
        <button className='hover:translate-x-5 text-md group no-underline border-b flex hover:text-blue-600 items-center justify-between py-2 text-gray-600'>Hash Table Data Structure</button><hr />
      </div>
        
      <div className='mt-4'>
        <button className='rounded-full text-xs px-3 py-2 justify-between items-center no-underline border-b flex text-white text-left bg background bg-gradient-to-r from-slate-600 to-black hover:from-blue-600 hover:to-blue-800 '>View All Videos →</button>
      </div>
      </div>
    </Container>
  )
}

export default VideoExplanations