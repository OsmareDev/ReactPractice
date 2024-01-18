import './ShootingStars.scss'

export default function ShootingStars({
    className = "",
    numberOfStars = 0
}) {
    

    const combinedClasses = `posAbsolute w100vw h100vh sky ${className}`;
    let stars = [];

    for (let i = 0; i < numberOfStars; i++) {
        const n = roundMultipleOf(getRandomNumber(0, window.innerWidth + window.innerHeight), 10);
        let position = {
            x: n,
            y: 0
        } 
        if (n > window.innerWidth) {
            position.x = roundMultipleOf(window.innerWidth, 10);
            position.y = n - roundMultipleOf(window.innerWidth, 10);
        }

        // size may be not that important
        const size = roundMultipleOf(getRandomNumber(0, 10), 5);
        const starClasses = `posAbsolute w${size}px h${size}px bg-white borderR50per shadow0HV-10B-white top${position.y}px left${position.x}px`;

        stars.push(
            <span className={starClasses}></span>
        )
    }

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function roundMultipleOf(numero, multiple) {
        return Math.floor(numero / multiple) * multiple;
    }

    return <>
        <section className={combinedClasses}>
            {stars}
        </section>
    </>
}