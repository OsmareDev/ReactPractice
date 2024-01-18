import AutoWriteText from '../../Components/AutoWriteText/AutoWriteText';
import BaseCard from '../../Components/BaseCard/BaseCard'
import BasicNavBar from '../../Components/BasicNavBar/BasicNavBar';
import PersonalCard from '../../Components/PersonalCard/PersonalCard';
import './AboutUs.scss'

export default function AboutUs() {

    const elements = [];
    elements.push(
        <BasicNavBar links={{
            Home : "Home",
            AboutUs : "About Us",
            Contact : "Contact"
        }} className='w30per posAbsolute top20px centerH'/>,
        <hr className='posAbsolute top60px w90per h1px bg-white centerH'/>,
        <AutoWriteText className='posAbsolute h100per top80px justifyText w80per centerH' text1='
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel ullamcorper magna, nec efficitur enim. Suspendisse dictum tincidunt nibh ac finibus. Vestibulum eget metus mollis, hendrerit ipsum sit amet, aliquet metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim arcu euismod, posuere ante ac, condimentum est. Morbi fermentum est sit amet varius laoreet. Sed ut felis ultrices, pulvinar est mattis, convallis turpis. Pellentesque tristique risus non cursus pretium. Praesent non mi non metus congue scelerisque vel sed elit. Cras volutpat egestas sollicitudin.
        ' text2='
            In nisi eros, euismod ac tincidunt non, volutpat a massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis volutpat fringilla pretium. Etiam eleifend erat et lacus eleifend vehicula. Quisque ultricies ullamcorper nisl sed ullamcorper. Aenean efficitur tempus arcu, at pretium mi venenatis sed. Mauris nibh urna, molestie ac massa non, semper condimentum orci. Nunc a turpis at arcu porta mattis nec in sem. Mauris finibus eros eget porttitor pulvinar. Proin id nisi ultrices, bibendum quam vitae, tincidunt sapien. Mauris viverra dolor augue, volutpat malesuada magna vehicula vel. Proin et nisi id ex lobortis ullamcorper eu a diam. Etiam in scelerisque lorem. In mollis, tortor eget feugiat ornare, lacus nulla ornare ligula, mattis vulputate ex tortor vel lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque malesuada, ligula ac faucibus commodo, arcu dui finibus libero, in imperdiet libero nibh ut orci.
        ' text3='
            Vivamus eleifend facilisis rutrum. In hac habitasse platea dictumst. Nullam posuere ex ut ex dictum, id varius lacus condimentum. Aenean sit amet consequat arcu. Donec ut lacinia leo. Pellentesque aliquam diam at ligula vulputate, nec sagittis dui scelerisque. Vivamus condimentum vitae turpis a pellentesque.
        ' text4='
            Vestibulum mattis eleifend turpis tempus elementum. Praesent laoreet risus nunc, vel convallis nisl rhoncus id. Nunc interdum augue nec risus fringilla, nec rutrum risus pellentesque. Integer facilisis est eu posuere hendrerit. Etiam vitae nisi interdum, euismod nibh quis, faucibus velit. Morbi semper egestas elit ut venenatis. Nullam egestas diam purus, ac dapibus odio ultricies id. Praesent feugiat mollis felis rutrum lacinia. Quisque elit elit, consequat quis lorem viverra, faucibus tincidunt diam.
        '/>

        // <AutoWriteText className='posAbsolute h500px top210px justifyText w80per centerH' text='
        //     In nisi eros, euismod ac tincidunt non, volutpat a massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis volutpat fringilla pretium. Etiam eleifend erat et lacus eleifend vehicula. Quisque ultricies ullamcorper nisl sed ullamcorper. Aenean efficitur tempus arcu, at pretium mi venenatis sed. Mauris nibh urna, molestie ac massa non, semper condimentum orci. Nunc a turpis at arcu porta mattis nec in sem. Mauris finibus eros eget porttitor pulvinar. Proin id nisi ultrices, bibendum quam vitae, tincidunt sapien. Mauris viverra dolor augue, volutpat malesuada magna vehicula vel. Proin et nisi id ex lobortis ullamcorper eu a diam. Etiam in scelerisque lorem. In mollis, tortor eget feugiat ornare, lacus nulla ornare ligula, mattis vulputate ex tortor vel lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque malesuada, ligula ac faucibus commodo, arcu dui finibus libero, in imperdiet libero nibh ut orci.
        // '/>,
        // <AutoWriteText className='posAbsolute h500px top400px justifyText w80per centerH' text='
        //     Vivamus eleifend facilisis rutrum. In hac habitasse platea dictumst. Nullam posuere ex ut ex dictum, id varius lacus condimentum. Aenean sit amet consequat arcu. Donec ut lacinia leo. Pellentesque aliquam diam at ligula vulputate, nec sagittis dui scelerisque. Vivamus condimentum vitae turpis a pellentesque.
        // '/>,
        // <AutoWriteText className='posAbsolute h500px top480px justifyText w80per centerH' text='
        //     Vestibulum mattis eleifend turpis tempus elementum. Praesent laoreet risus nunc, vel convallis nisl rhoncus id. Nunc interdum augue nec risus fringilla, nec rutrum risus pellentesque. Integer facilisis est eu posuere hendrerit. Etiam vitae nisi interdum, euismod nibh quis, faucibus velit. Morbi semper egestas elit ut venenatis. Nullam egestas diam purus, ac dapibus odio ultricies id. Praesent feugiat mollis felis rutrum lacinia. Quisque elit elit, consequat quis lorem viverra, faucibus tincidunt diam.
        // '/>
    )


    return <>
        <BaseCard className='w1000px h600px bg-deepPurple-90 shadow10HV-30B-burgundy left400px top50px' insideElements={
            elements
        }/>
        <PersonalCard cardName="OsmareDev" className='posAbsolute left130px w350px h450px bg-steel-90 shadow0HV-10B-burgundy'/>
    </>
}
