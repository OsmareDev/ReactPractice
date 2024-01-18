import { useRef, useEffect } from 'react';
import './PersonalCard.scss'

export default function PersonalCard({
    className = "",
    cardName = "Example"
}) {
  
    const combinedClasses = `posAbsolute borderR10px top100px ${className} personalCard`;
    const cardRef = useRef(null);

    // revisar dudo que este bien
    useEffect(() => {
        document.addEventListener("mousemove", (e) => RotateElement(e, cardRef.current))
        
        return () => {
            document.removeEventListener("mousemove", (e) => {
                RotateElement(e, cardRef.current);
            });
        };
    })

    function ObtainCenter(element) {
        const rect = element.getBoundingClientRect();
      
        const centroX = rect.left + rect.width / 2;
        const centroY = rect.top + rect.height / 2;
      
        return { x: centroX, y: centroY };
    }

    function ObtainSemiSize(element) {
        const rect = element.getBoundingClientRect();
        return { x: rect.width / 2, y: rect.height / 2}
    }

    function RotateElement(event, element) {
        const x = event.clientX;
        const y = event.clientY;

        const middle = ObtainCenter(element);

        let offsetX = Math.abs(x - middle.x);
        let offsetY = Math.abs(y - middle.y);
        const semiSize = ObtainSemiSize(element);

        if (offsetX > semiSize.x || offsetY > semiSize.y) {
            // element.style.setProperty("--rotateX", "0 deg");
            // element.style.setProperty("--rotateY", "0 deg");
            return;
        }

        offsetX = ((x - middle.x) / middle.x) * 90;
        offsetY = ((y - middle.y) / middle.y) * 75;

        element.style.setProperty("--rotateX", -1 * offsetY + "deg");
        element.style.setProperty("--rotateY", offsetX + "deg");
    }

    return <> 
        <div ref={cardRef} className={combinedClasses}>
            <img src="/photo.jpg" className='w90per posAbsolute centerH top20px opacity70 shadow0HV-30B-burgundy borderR10px'/>
            <b className='w100per posAbsolute bottom40px centerTextH fontSize30em'>{cardName}</b>
        </div>
    </>
}