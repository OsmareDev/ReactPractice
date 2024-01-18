import { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button.jsx'
import Input from '../../Components/Input/Input.jsx'
import './SignInForm.scss'

export default function SignInForm({
    className = ""
}) {
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const isButtonDisabled = !loginForm.username || !loginForm.password;
  
  const combinedClasses = `flex-container-column w100per ${className}`;

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return <>
    <form className={combinedClasses} onSubmit={handleSubmit}>
      <div className='flex-item-50 flex-container-column w100per'>
        <Input labelText="Username" onChange={(e) => {setLoginForm({...loginForm, username: e.target.value})}}/>
        <Input labelText='Password' onChange={(e) => {setLoginForm({...loginForm, password: e.target.value})}}/>
      </div>
      <div className='flex-item-50 w100per'>
        <Link to="/home">
          <Button displayName='Registrame' className='posRelative centered textCenter' disabled={isButtonDisabled}/>
        </Link>
      </div>
    </form>
    </>
}