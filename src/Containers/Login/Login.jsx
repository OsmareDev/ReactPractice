import './Login.scss'
import TurningCard from '../../Components/TurningCard/TurningCard.jsx';
import LogInForm from '../../Components/LoginForm/LoginForm.jsx';
import SignInForm from '../../Components/SignInForm/SignInForm.jsx';

import { useState } from 'react'

export default function Login() {

  const [turned, setTurned] = useState(false);
  const onTurn = () => setTurned(!turned);

  return <>
      <TurningCard
        turned={turned}
        classNameFront='flex-container-column'
        classNameBack='flex-container-column'
        insideElementsFrontFace={[
          <h2 key='titleL' className='posRelative flex-item-40 w100per textCenter fontSize30em'>
            LogIn
            <button onClick={onTurn} className='posAbsolute centerV right20px w100px h25px borderNone borderR5px bg-none clickable border-white-2px'> Sign In </button>
          </h2>,
          <LogInForm key='formL' className='flex-item-70'/>
        ]}
        insideElementsBackFace={[
          <h2 key='titleL' className='posRelative flex-item-40 w100per textCenter fontSize30em'>
            SignIn
            <button onClick={onTurn} className='posAbsolute centerV left20px w100px h25px borderNone borderR5px bg-none clickable border-white-2px'> Log In </button>
          </h2>,
          <SignInForm key={'formS'} className='flex-item-70'/>
        ]}
      />
    </>
}
