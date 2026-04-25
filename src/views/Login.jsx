import { Button, TextField } from '@mui/material'
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = ({login}) => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = async (e) => {
      e.preventDefault()
      if(!username || !password){
        alert("Campos vacíos");
        return;
      }
      const res = await login({ email: username, password }) // nombre : valor (por si el atributo antes se llamaba diferente)
      if(res.isLogin === true){
        navigate("count");
      } else{
        alert("credenciales incorrectas");
      }
    }

  return (
    <form onSubmit={onSubmit}>
    <TextField value = {username} onChange={(e) => setUsername(e.target.value)} variant = "outlined" placeholder = "Username"/>
    <TextField value = {password} onChange={(e)=>setPassword(e.target.value)} type = "password" variant = "outlined" placeholder = "Password"/>
    <Button type ="submit" variant ="outlined">Login</Button>
    </form>
  )
}

export default Login