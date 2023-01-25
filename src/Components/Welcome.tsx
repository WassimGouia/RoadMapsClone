import React from 'react'
import Container from './Container'

const Welcome = () => {
  return (
    // <div className='inline-block item-center text-white'>
    //   <div className='font-sans hover:Segoe UI font-bold text-2xl'>
    //     <h1>Hey there!<span role="img" aria-label="waving hand">👋</span> </h1>
    //   </div>
    //   <div className='font-sans hover:Segoe UI '>
    //     <span className='font-semibold'>roadmap.sh</span> is a community effort to create roadmaps, guides and other educational content to help guide the developers in picking up the path and guide their learnings.
    //   </div>
    // </div>
    <div className='text-gray-400 p-20'>
      <div className='font-sans hover:Segoe UI font-bold text-5xl text-inline bg-gradient-to-b from-[#f3e8ff] via-[#d8b4fe] to-[#c026d3]
                 text-transparent bg-clip-text text-center'>
        <h1><span>Developer Roadmaps</span> </h1>
      </div>
      <>
      <Container>
      <div className='font-sans hover:Segoe UI text-inline hidden sm:block px-4 text-lg leading-relaxed my-2.5 sm:my-5 sm:text-lg w-full text-center'>
        <span className='font-semibold'>roadmap.sh</span> is a community effort to create roadmaps, guides and other educational content to help guide the developers in picking up the path and guide their learnings.
      </div>
      </Container>
      </>
    </div>
    
  )
}

export default Welcome