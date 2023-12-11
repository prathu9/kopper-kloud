import './custom-button.style.css';

const CustomButton = ({customClass, handleClick, children}) => {
    return(
        <button className={`btn-default-style ${customClass}`} onClick={handleClick}>
            {children}
        </button>
    )
}

export default CustomButton;