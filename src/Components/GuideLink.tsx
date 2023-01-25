type GuideProps = {
    content: string
    itsType: string
    isNew?: boolean
    month?: string 
}

const GuideLink = ({content, isNew,itsType, month}: GuideProps) => {
    return (
        <><div className="text-md group flex hover:text-blue-600 items-center justify-between text-gray-600">
            <button className='hover:translate-x-5 duration-200 text-md group no-underline border-b flex hover:text-blue-600 items-center justify-between py-2 text-gray-600'>
                {content}
                {isNew && (<p className='text-xs font-medium bg-green-300 ml-1.5 px-1.5 py-0.5 rounded-sm text-green-900 uppercase'>NEW · {month}</p>)}
            </button>
            <p className="text-xs hidden capitalize sm:block text-gray-500">{itsType}</p>

        </div><hr /></> 
    )
}

export default GuideLink