import { Component } from "react";
import BottomBar from "./Components/Footer";
import Guides from "./Components/Guides";
import InfoBottom from "./Components/InfoBottom";
import  NavBar from "./Components/NavBar";
import SkillBased from "./Components/SkillBased";
import Videos from "./Components/Videos";
import Welcome from "./Components/Welcome";
import RoleBased from "/home/wassi/RoadMap-Clone/src/Components/RoleBased";
import { data } from "./data";
import Container from "./Components/Container";


const App =() => {
  return (
   
   <div className="bg-slate-900 relative z-0">
      <div className=' absolute w-full -z-10'><div className={` -top-30 blur-[100px] mx-auto rounded-full md:h-96 h-[320px] md:w-96 w-[320px] bg-gradient-to-b from-slate-900 to-black`}></div></div>
      <div>
      <div className="bg-gradient-to-b from-slate-900 to-black/50 relative z-0 py-8">
         <NavBar/>
         <Welcome/>
         <RoleBased/>
         <div className="mt-8">
         <SkillBased/>
         </div>
      </div>
      </div>
      <div className="grid grid-cols-1 bg-gray-50  py-7 ">
         <div className="p-8">
            <Guides/>
         </div>
         <div className="p-8">
            <Videos />
         </div>
         <div>
            <hr />
         </div>
      </div>
      <div className="bg-white p-8">
         <InfoBottom/>
      </div>

      <Container>
      <div>
         <BottomBar/>
      </div>
      </Container>
      
   </div>
  )
}
export default App ;
