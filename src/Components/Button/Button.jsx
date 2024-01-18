import './Button.scss'

export default function Button({
    displayName = "Button",
    className = "",
    disabled = false
}) {
  
  const combinedClasses = `padding10px borderR2px borderNone bg-darkCyan w200px h40px fontSize12em ${className}`;

  return <>
      <button className={combinedClasses} disabled={disabled}>{displayName}</button>
    </>
}