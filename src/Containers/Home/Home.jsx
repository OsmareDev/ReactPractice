import BaseCard from '../../Components/BaseCard/BaseCard'
import './Home.scss'
import '../../Components/BaseCard/BaseCard'
import BasicNavBar from '../../Components/BasicNavBar/BasicNavBar';
import ContraptionCard from '../../Components/ContraptionCard/ContraptionCard';

export default function Home() {

    const numberOfCards = 5;
    const infoCards = {
        0 : { img: <b className='fontSize30em posAbsolute w100per centerTextH'>ぁ</b>, title: "Unity", txt: "various mechanics created in c# for the unity engine" },
        1 : { img: <b className='fontSize30em posAbsolute w100per centerTextH'>と</b>, title: "Physics", txt: "Some physics simulation techniques for particles, waves, cloth, etc..." },
        2 : { img: <b className='fontSize30em posAbsolute w100per centerTextH'>シ</b>, title: "Pathfinding", txt: "The A* algorithm is a path finding method that finds the shortest path between two points in a weighted graph, using heuristics to optimize efficiency and ensure path optimization." },
        3 : { img: <b className='fontSize30em posAbsolute w100per centerTextH'>ホ</b>, title: "Boids", txt: "simulation of Boids and flock behavior using p5.js library " },
        4 : { img: <b className='fontSize30em posAbsolute w100per centerTextH'>※</b>, title: "OpenGL", txt: "3D mathematics and graphics practice exercises in openGL using the GLEW, GLUT and GLM libraries" }
    }

    const elements = [];

    elements.push(
        <BasicNavBar links={{
            Home : "Home",
            AboutUs : "About Us",
            Contact : "Contact"
        }} className='w30per posAbsolute top20px right0px'/>,
        <h1 className='posAbsolute left30px top20px color-white fontSize50em letterSpace5em'>WELCOME</h1>,
        <p className='posAbsolute left30px top110px color-white fontSize10em w80per justifyText'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in justo interdum, bibendum nisl sed, egestas odio. Nulla sem augue, faucibus eget massa quis, mattis sollicitudin purus. Quisque fermentum et tellus id laoreet. Vestibulum tortor augue, cursus non est nec, euismod sagittis lorem. Suspendisse nulla urna, porttitor in varius ac, volutpat et nisi. Ut nunc dui, elementum eget tellus iaculis, consequat sagittis neque. Suspendisse aliquam varius dictum. Aenean finibus turpis porttitor augue tempus volutpat. Sed nec ipsum eu nunc hendrerit convallis non quis lorem. Nulla at posuere nisl.
            <br/>
            <br/>
            Nullam ornare sapien metus, eget bibendum nulla pharetra eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum egestas sed nulla et iaculis. Nunc non magna velit. Donec imperdiet, nibh vitae ornare vehicula, dolor ipsum pharetra sem, eget maximus lorem sem quis diam. Proin hendrerit ac leo in lacinia.
        </p>
    )

    for (let i = 0; i < numberOfCards; i++) {
        let combinedClass = `animation animationOrder${i} w200px h150px bg-darkCyan left${50 + 250*i}px bottom-70px`;
        //console.log(infoCards[i][1]);
        elements.push(
            <ContraptionCard className={combinedClass} logo={infoCards[i].img} logoText={infoCards[i].title} text={infoCards[i].txt}/>
        );
    }

    return <>
        <BaseCard className='w1150px h450px left100px top50px bg-deepPurple-90 shadow10HV-30B-burgundy' insideElements={
            elements
        }/>
    </>
}