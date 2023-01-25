type ContainerProps = {
    children: React.ReactNode
}

const Container = ({children}: ContainerProps) => {
    return (
        <div className="md:w-[830px] w-auto px-3 mx-auto">
            {children}
        </div>
    )
}


export default Container