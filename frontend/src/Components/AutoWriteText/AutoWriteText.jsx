import './AutoWriteText.scss'

export default function AutoWriteText({
    className = "",
    text1 = "",
    text2 = "",
    text3 = "",
    text4 = ""
}) {
  
    const combinedClasses = `${className}`;

    return <>
        <div className={combinedClasses}>
            <span className='typeText'>
                {text1}
                <br/>
                <br/>
                {text2}
                <br/>
                <br/>
                {text3}
                <br/>
                <br/>
                {text4}
            </span>
        </div>
    </>
}

