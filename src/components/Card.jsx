const Card = ({ children, className, ...props }) => {
    return (
        <div className={`p-4 flex flex-col items-center rounded-lg shadow-md transition cursor-pointer ${className ? className : 'bg-primary-50 hover:bg-primary-400 text-primary-500 hover:text-white border border-primary-500'}`} {...props}>{children}</div>
    )
}

export default Card
