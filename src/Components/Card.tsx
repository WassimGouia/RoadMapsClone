import { useState } from "react"

type CardProps = {
    title: string,  // content: string,
    isNew?: boolean,
    isUpcoming?: boolean,
    // color: string
    // className?: string;
}

const Card = ({title , isNew , isUpcoming }: CardProps) => {
    // const [isUpcoming, setisUpcoming] = useState(false);
    if(isNew) {
        return (
            <button className="flex group no-underline bg-slate-900 border border-slate-800 font-regular hover:border-slate-600 hover:text-slate-100 p-2.5 relative rounded-lg sm:p-3.5 text-slate-400">
                    <h2 className="text-left text-md">
                        {title}
                    </h2>

                <span className="text-xs font-medium absolute bottom-1.5 flex items-center right-2 rounded-br rounded-tl text-purple-300">
                <span className="flex h-2 mr-1.5 w-2">
                <span className="h-2 w-2 inline-flex rounded-full absolute animate-ping opacity-75 bg-purple-400">
                </span>
                <span className="h-2 w-2 inline-flex rounded-full relative bg-purple-500"></span> 
                </span>New</span>

            </button>
        )
    }
    else if(isUpcoming) {
        return (
            <button className="flex  group no-underline bg-slate-900 border border-slate-800 font-regular hover:border-slate-600 hover:text-slate-100 p-2.5 relative rounded-lg sm:p-3.5 text-slate-400">
                <h2 className="text-left text-md">
                    {title}
                </h2>

                <span className="text-xs font-medium absolute bottom-1.5 flex items-center right-2 rounded-br rounded-tl text-slate-500">
                <span className="flex h-2 mr-1.5 w-2"><span className="h-2 w-2 inline-flex rounded-full absolute animate-ping opacity-75 bg-slate-500">
                </span> 
                <span className="h-2 w-2 inline-flex rounded-full relative bg-slate-600"></span>
                </span>Upcoming</span>
                    

    
            </button>
        )
    }

    else {
        return (
            <button className="flex group no-underline bg-slate-900 border border-slate-800 font-regular hover:border-slate-600 hover:text-slate-100 p-2.5 relative rounded-lg sm:p-3.5 text-slate-400">
                <h2 className="text-left text-md">
                    {title}
                </h2>
            </button>
        )
    }



    // return (
    //     <button>
    //         {/* <h2 className={`${color} text-xl font-bold `}>{title}</h2>
    //         <p>{content}</p> */}    
    //         <div className="block text-left text-md group no-underline bg-slate-900 border border-slate-800 font-regular hover:border-slate-600 hover:text-slate-100 p-2.5 relative rounded-lg sm:p-3.5 text-slate-400">
    //             <h2>
    //                 {title}
    //             </h2> 
    //             if (isNew) {
    //                 {isNew}&&(<p className='animate-ping duration-200 text-xs font-medium absolute bottom-1.5 flex items-center right-2 rounded-br rounded-tl text-purple-300'>New</p>)}
    //             else if (isUpcoming) {
    //                 {isUpcoming }&& (<p className='animate-ping duration-200 text-xs font-medium absolute bottom-1.5 flex items-center right-2 rounded-br rounded-tl text-slate-500'>Upcoming</p>)}
                


    //             {/* <span>
    //                 {isNew &&(<p className='animate-ping text-xs font-medium absolute bottom-1.5 flex items-center right-2 rounded-br rounded-tl text-purple-300'>New</p>)}
    //                 {isUpcoming &&(<p className='animate-ping text-xs font-medium absolute bottom-1.5 flex items-center right-2 rounded-br rounded-tl text-slate-500'>Upcoming</p>)}
    //             </span> */}
    //         </div>
    //     </button>
    // )
}

export default Card