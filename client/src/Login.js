import './styles/Login.css'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Button from './Button'
import Input from './Input'


const api = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
})

const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = async () => {
    try {
      const response = await api.post('/login', {
        login,
        password,
      })

      //tutaj będzie zmiana z home na nowy komponent
      window.location.href = '/home'
    } catch (error) {
      if (error.response.status === 401) {
        alert('invalid credentials')
        setLogin('')
        setPassword('')
      }
    }
  }

  return (
    <div className='container-login'>

      <form className='login-form'>
        <h3 className='login-label'>Login</h3>
        <Input 
          inputStyle="input--clean--light"
          insputSize="input--big"
          placeholder="Login"
          onChange={(e) => setLogin(e.target.value)}
      ></Input>
        <h3 className='password-label'>Password</h3>
        <Input 
          inputType="password"
          inputStyle="input--clean--light"
          insputSize="input--big"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
      ></Input>
        <Button 
          className="Button"
          onClick={loginUser}
          type="button"
          buttonStyle="btn--primary--outline"
          buttonSize="btn--medium"
        >Login</Button>
      </form>
    </div>
  )
}

export default Login
