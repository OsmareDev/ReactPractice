import './MultipleOptionButton.scss'

export default function MultipleOptionButton({
    className = "",
    // insideElements = ""
}) {
  
  const combinedClasses = `posAbsolute borderR10px bg-white w400px h50px top50px centerH ${className}`;

  return <>
    <div className={combinedClasses}>
      <div className='posAbsolute borderR10px bg-gray w200px left0px h100per'/>
      <div className='posAbsolute bg-gray w20px centerH h100per'/>

      <p className='posAbsolute w200px left0px h100per textCenter color-burgundy clickable' >Log In</p>
      <p className='posAbsolute w200px left200px h100per textCenter color-burgundy clickable'>Sign In</p>
    </div>
    </>
}