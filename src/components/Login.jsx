import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log(username)
    console.log(password)
    if (username === "jhildabrand257@gmail.com" && password ==="Taismae257") {
      alert("Success!");
    } else {
      alert("Username or Password not valid.");
    }
  }

  return (
    <>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
    <TextField id="username" label="Username" variant="outlined" value={username} onChange={(e) => {setUsername(e.target.value)}} required/>
    <TextField id="password" label="Password" variant="outlined" value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" required />
    <br/>
    <Button type="submit" variant="outlined">Login</Button>
    </form>
    </>
)}