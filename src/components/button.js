import button from './button.module.css'

function Button({  
    children,
    type,
    onClick,
    className,
    buttonStyle,
    buttonSize}) 
    {
  return (
    <button className={`${button.button} ${button[className]}`} onClick={onClick}>
        {children}
    </button>
  );
}

export default Button;