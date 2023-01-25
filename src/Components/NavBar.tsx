import Container from "./Container";
import Logo from "./Logo";


const NavBar = () => {
    return (
        <Container>
        <div className="flex justify-between items-center space-x-4 background text-white">
            <div className="mr-auto">
                <button className=" flex flex-auto gap-3 font-sans hover:Segoe UI font-semibold text-lg"><Logo/> <p>roadmap.sh</p>  </button>
            </div>
            
            
            <button className="font-sans hover:Segoe UI font-semibold hover:text-white text-gray-400"> Roadmaps </button>
            <button className="font-sans hover:Segoe UI font-semibold hover:text-white text-gray-400"> Guides </button>
            <button className="font-sans hover:Segoe UI font-semibold hover:text-white text-gray-400"> videos </button>
                {/* <button className="font-sans hover:Segoe UI font-semibold bg-gradient-to-r from-yellow-200 to-cyan-300 inline-block
                 text-transparent bg-clip-text"> Hiring A DevRel </button> */}
            <button className="text-sm font-regular bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-4 py-2 rounded-full text-white"> Subscribe </button>
            
            
        </div>
        </Container>
    )
    
    
    // const sideBarIcon = ( {icon} ,  text = 'tooltip') => { 
    //       <div className="sidebar-icon">
    //           {icon}
    //       </div>
    
}

export default NavBar ;