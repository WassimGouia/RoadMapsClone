import React from 'react'
import Card from './Card' ;
import { data1 } from '../data' ;
import Container from './Container';


const SkillBased: React.FC = () => {
    return (
      <Container>
      <><div className='items-center'>
      <h1 className="text-md text-center text-slate-400 bg-slate-900 border border-slate-900 font-regular text-md rounded-lg left-1/2 inline-flex top-[17px] px-3 py-1">Skill Based RoadMaps </h1>
    </div><div className=' grid grid-cols-3 gap-4 btn btn-outline text-[#7295A9] mt-8'>
        {data1.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title1} />
          );
        })}
      </div></>
      </Container>
    );
  }
  
export default SkillBased ;