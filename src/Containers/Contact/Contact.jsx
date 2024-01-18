import BaseCard from '../../Components/BaseCard/BaseCard'
import BasicNavBar from '../../Components/BasicNavBar/BasicNavBar';
import ShootingStar from '../../Components/ShootingStars/ShootingStars'
import './Contact.scss'

export default function Contact() {

    let elements = [];

    elements.push(
        <BasicNavBar links={{
            Home : "Home",
            AboutUs : "About Us",
            Contact : "Contact"
        }} className='w80per posAbsolute bottom20px centerH'/>
    );

    return <>
        <ShootingStar numberOfStars={50}/>
        <BaseCard className='w500px h500px bg-deepPurple-90 shadow10HV-30B-burgundy posAbsolute centered' insideElements={
            elements
        }/>
    </>
}