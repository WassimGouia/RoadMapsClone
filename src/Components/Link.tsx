import React from 'react'

type LinkProps = {
    title: string,
    // content: string,
    // color: string
    // className?: string;
    style?: React.CSSProperties;
}

const Link = ({title }: LinkProps) => {
    return (
        <button>
            {/* <h2 className={`${color} text-xl font-bold `}>{title}</h2>
            <p>{content}</p> */}    
            <h2 className={`text-left text-md group no-underline bg-slate-900 border border-slate-800 font-regular hover:border-slate-600 p-2.5 relative rounded-lg sm:p-3.5`}>{title}</h2> 
        </button>
    )
}

export default Link