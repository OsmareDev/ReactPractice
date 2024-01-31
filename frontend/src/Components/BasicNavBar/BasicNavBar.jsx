import { Link } from 'react-router-dom';
import './BasicNavBar.scss'

export default function BasicNavBar({
    className = "",
    links = {}
}) {
    const combinedClasses = `flex-container ${className}`;

    const tags = [];
    let cont = 0;
    for (let key in links) {
        const link = `/${key}`;
        const text = links[key];

        tags.push(
            <Link key={cont} to={link} className='flex-item color-white w100per'>
                <p key={cont+1} className='w100per centerTextH'>{text}</p>
                <span key={cont+2} className='w0per bg-white h2px posRelative bottom0px centerH disBlock'></span>
            </Link>
        );

        // for the "key"
        cont += 3;
    }

    return <>
        <div className={combinedClasses}>
            {tags}
        </div>
    </>
}