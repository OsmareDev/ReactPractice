import './BaseCard.scss'

export default function BaseCard({
    className = "",
    insideElements = ""
}) {
  
  const combinedClasses = `posAbsolute borderR10px ${className}`;

  return <>
      <div className={combinedClasses}>
        {/* No puedo ponerle el atributo key? */}
        {insideElements}
      </div>
    </>
}