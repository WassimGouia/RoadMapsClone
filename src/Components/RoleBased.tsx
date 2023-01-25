import React from 'react'
import Card from './Card' ;
import { data } from '../data' ;
import Container from './Container';

const RoleBased: React.FC = () => {
    return (
      <div>
        <div className='relative grid place-items-center'>
          <div className='w-full bg-slate-900 h-[1px] absolute'></div>
          <h1 className="text-md text-center text-slate-400 z-10 bg-slate-900 border border-slate-900 font-regular text-md rounded-lg inline-flex top-[17px] px-3 py-1">Role Based RoadMaps </h1>
        </div>
      <Container>
      <div className='gap-2 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 text-[#7295A9] mt-8'>
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                isNew={item.isNew}
                isUpcoming={item.isUpcoming}
                />
            );
          })}
        </div>
      </Container>
      </div>
    );
  }
  
export default RoleBased ;