import { AiFillStar } from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'
import React, { useState } from "react";
import styled from "styled-components";
import Container from './Container';

const StyledButton = styled.button`
  className="inline-flex relative items-center bg-white border border-black   px-3 py-1.5 rounded-lg text-sm"

  &:hover { 
    className="inline-flex relative items-center group-hover:bg-black group-hover:text-white text-white"

  }
`;
// const button= () => {
//   return (
//     <div>
//       <h1 className='font-sans hover:Segoe UI font-bold text-5xl text-black text-center'>
//         Open Source
//       </h1>
//       <p className='font-sans hover:Segoe UI text-center text-sm leading-relaxed my-2.5 sm:my-5 sm:text-lg text-gray-600 p-6'>
//         The project is OpenSource
//       </p>
//       <div className='text-center'>
//         <button className='rounded-full text-xs px-3 py-2 justify-between items-center no-underline border-b flex text-white text-left bg background bg-gradient-to-r from-slate-600 to-black hover:from-blue-600 hover:to-blue-800 '>
//             <AiFillStar/> 225k GitHub Stars
//         </button>
//       </div>
//     </div>
//   )
// }
const InfoBottom = () => {
  
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Container>
    <div className='container max-w[600px]'>
       <h1 className='font-sans hover:Segoe UI font-bold text-5xl text-black text-center'>
         Open Source
       </h1>
       <div>
       
       <p className='font-sans hover:Segoe UI text-center text-sm leading-relaxed my-2.5 sm:my-5 sm:text-lg text-gray-600 p-6 '>
         The project is OpenSource, <a href="https://github.com/search?o=desc&amp;q=stars%3A%3E100000&amp;s=stars&amp;type=Repositories" className="hover:text-black font-medium text-gray-600 underline underline-offset-2" target="_blank">6th most starred project on GitHub</a> and is visited by hundreds of thousands of developers every month
      </p>     
      </div>
     
  <div className='text-center'>
    <StyledButton
      className="text-center inline-flex relative items-center bg-white border border-black px-3 py-1.5 rounded-lg text-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? <AiOutlineStar/> : < AiFillStar/>}
      {isHovered ? "226k Star us on Github" : "226k Github Stars"}
    </StyledButton>
  </div>
  </div>
  </Container>
  );

};

export default InfoBottom