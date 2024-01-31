import './Input.scss'

export default function Input({
    labelText = "Text",
    inputType = "text",
    className = "",
    value = "",
    onChange = () => {}
}) {
  
    const combinedClasses = `bg-none borderNone borderBottom w300px h50px fontSize15em ${className}`;

    return <>
        <div className='posRelative'>
            <input value={value} type={inputType} className={combinedClasses} onChange={onChange} required></input>
            <label className='fontSize15em posAbsolute bottom10px left10px'>{labelText}</label>
        </div>
    </>
}