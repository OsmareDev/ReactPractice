import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.scss'
import Button from '../../Components/Button/Button.jsx'
import Input from '../../Components/Input/Input.jsx'

export default function Login() {

  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const isButtonDisabled = !loginForm.username || !loginForm.password;

  return <>
      <div className='w500px h450px centered posAbsolute borderR5px bg-midnight-60 shadow10HV-30B-burgundy flex-container-column'>
        <h2 className='flex-item-50 w100per textCenter fontSize30em'>
          Login
        </h2>
        <div className='flex-item-50 flex-container-column w100per'>
          <Input labelText="Username" onChange={(e) => {setLoginForm({...loginForm, username: e.target.value})}}/>
          <Input labelText='Password' onChange={(e) => {setLoginForm({...loginForm, password: e.target.value})}}/>
        </div>
        <div className='flex-item-50 w100per'>
          <Link to="/home">
            <Button displayName='Iniciar Sesion' className='posRelative centered textCenter' disabled={isButtonDisabled}/>
          </Link>
        </div>
      </div>
    </>
}
