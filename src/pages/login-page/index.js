import { Button, TextField } from '@mui/material';
import './style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


export default function LoginPage() {
    const [password, setPassword] = useState(null)
    const [login, setLogin] = useState(null)
    const navigate = useNavigate()
    const submit = () => {
        let sessionLogin = sessionStorage.getItem('userLogin')
        let sessionPassword = sessionStorage.getItem('userPassword')
        if (sessionLogin === login ) {
            navigate('/')
        }
    }
    return (
        <form className="registration-form">
            <div>Вход</div>
            <TextField value={login} onChange={(e) => {setLogin(e.target.value)}} id="standard-basic" label="Логин" variant="standard" />
            <TextField value={password} onChange={(e) => {setPassword(e.target.value)}} id="standard-basic" label="Пароль" variant="standard" />
            <Button variant="contained" color="success" onClick={submit}>
                 Войти
            </Button>
            <Link to="/register">Зарегистрироваться</Link>
        </form>
    )
}