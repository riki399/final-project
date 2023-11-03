import { Button, TextField } from '@mui/material';
import './style.css';
import { useState } from 'react';


export default function RegisterPage() {
    const [password, setPassword] = useState(null)
    const [login, setLogin] = useState(null)
    const [repeatPassword, setRepeatPassword] = useState(null)

    const submit = () => {
        sessionStorage.setItem('userLogin', login)
        sessionStorage.setItem('userPassword', password)
    }
    return (
        <form className="registration-form">
            <div>Регистрация</div>
            <TextField value={login} onChange={(e) => {setLogin(e.target.value)}} id="standard-basic" label="Логин" variant="standard" />
            <TextField value={password} onChange={(e) => {setPassword(e.target.value)}} id="standard-basic" label="Пароль" variant="standard" />
            <TextField value={repeatPassword} onChange={(e) => {setRepeatPassword(e.target.value)}} id="standard-basic" label="Повторите пароль" variant="standard" />
            <Button variant="contained" color="success" onClick={submit}>
                 Зарегистрироваться
            </Button>
        </form>
    )
}