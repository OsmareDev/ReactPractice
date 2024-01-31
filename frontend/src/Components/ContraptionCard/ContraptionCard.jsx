import './ContraptionCard.scss'

export default function ContraptionCard({
    className = "",
    logo = "",
    logoText = "",
    text = ""
}) {
  
    const combinedClasses = `posAbsolute borderR10px ${className} cardHover`;

    return <>
        <div className={combinedClasses}>
            <div className='posAbsolute w100per h100px top0px'>
                <div className='posAbsolute w100per h70px top30px'>{logo}</div>
                <p className='top10px posAbsolute w100per centerTextH'>{logoText}</p>
            </div>
            <div className='bg-white-40 posAbsolute w100per h10px top100px'></div>
            <div className='bg-white-10 posAbsolute w90per centerH h40px top110px borderRBottom10px'>
                <p className='textCenter'>...</p>
                <p className='textCenter opacity0'>{text}</p>
            </div>
        </div>
    </>
}