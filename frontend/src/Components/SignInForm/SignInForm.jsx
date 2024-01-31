import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button/Button.jsx'
import Input from '../../Components/Input/Input.jsx'
import './SignInForm.scss'
import axios from 'axios';
import signInService from '../../Services/SignInService'

export default function SignInForm({
    className = ""
}) {
  const [signInForm, setSignInForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const isButtonDisabled = !signInForm.username || !signInForm.password;
  
  const combinedClasses = `flex-container-column w100per ${className}`;

  const handleSubmit = async (event) => {
    event.preventDefault();

    signInService.signin(signInForm)
    .then( data => {
      setSignInForm({
        username: "",
        password: ""
      })
    })
  }

  return <>
    <form className={combinedClasses} onSubmit={handleSubmit}>
      <div className='flex-item-50 flex-container-column w100per'>
        <Input value={signInForm.username} labelText="Username" onChange={(e) => {setSignInForm({...signInForm, username: e.target.value})}}/>
        <Input value={signInForm.password} labelText='Password' onChange={(e) => {setSignInForm({...signInForm, password: e.target.value})}}/>
      </div>
      <div className='flex-item-50 w100per'>
        <Button displayName='Registrame' className='posRelative centered textCenter' disabled={isButtonDisabled}/>
      </div>
    </form>
    </>
}