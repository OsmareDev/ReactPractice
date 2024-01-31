import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button/Button.jsx'
import Input from '../../Components/Input/Input.jsx'
import './LogInForm.scss'
import loginService from '../../Services/LoginService.jsx'


export default function LogInForm({
    className = ""
}) {
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const isButtonDisabled = !loginForm.username || !loginForm.password;

  const combinedClasses = `flex-container-column w100per ${className}`;

  const handleSubmit = (event) => {
    event.preventDefault();

    loginService.login(loginForm)
    .then( data => {
      console.log(data);
      navigate('/home');
    })
    .catch ( error => {
      console.log(error);
    })
  }

  return <>
    <form className={combinedClasses} onSubmit={handleSubmit}>
      <div className='flex-item-50 flex-container-column w100per'>
        <Input value={loginForm.username} labelText="Username" onChange={(e) => {setLoginForm({...loginForm, username: e.target.value})}}/>
        <Input value={loginForm.password} labelText='Password' onChange={(e) => {setLoginForm({...loginForm, password: e.target.value})}}/>
      </div>
      <div className='flex-item-50 w100per'>
        <Button type="submit" displayName='Iniciar Sesion' className='posRelative centered textCenter' disabled={isButtonDisabled}/>
      </div>
    </form>
    </>
}