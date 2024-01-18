import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button/Button.jsx'
import Input from '../../Components/Input/Input.jsx'
import './LogInForm.scss'


export default function LogInForm({
    className = ""
}) {
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const isButtonDisabled = !loginForm.username || !loginForm.password;

  const combinedClasses = `flex-container-column w100per ${className}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
  }

  return <>
    <form className={combinedClasses} onSubmit={handleSubmit}>
      <div className='flex-item-50 flex-container-column w100per'>
        <Input labelText="Username" onChange={(e) => {setLoginForm({...loginForm, username: e.target.value})}}/>
        <Input labelText='Password' onChange={(e) => {setLoginForm({...loginForm, password: e.target.value})}}/>
      </div>
      <div className='flex-item-50 w100per'>
        <Button type="submit" displayName='Iniciar Sesion' className='posRelative centered textCenter' disabled={isButtonDisabled}/>
      </div>
    </form>
    </>
}