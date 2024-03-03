
const styleClasses = {
    primary: 'bg-gradient-to-r from-[#D20653] to-[#FF951D] ',
    secondary: 'bg-[#FFF5E9] border border-[#FF951D] !text-[#FF951D]',
    normal: '!bg-white !text-gray-500 border !border-gray-500',
};

const CustomButton = ({
    children,
    onClick,
    btnType = 'primary',
    customClassName,
    appendClassNames,
    disabled,
    onMouseEnter,
    onMouseLeave,
    type = 'button',
    ...rest
}) => {

    return (
        <button
            type={type}
            className={
                customClassName
                || `flex items-center justify-center text-white ${styleClasses[btnType]} ${appendClassNames}`
            }
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
};

export default CustomButton;
