import { useEffect, useState} from 'react'
import './style.css'
import axios from 'axios'
import { Button, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const options = {
    method: 'GET',
    url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
    headers: {
      accept: 'application/json',
      'X-RapidAPI-Key': 'ad56b2115bmshddb9825922443d7p1df088jsndd0ad480bad7',
      'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
    }
  };

export default function MainPage() {
    const [joke, setJoke] = useState(null);
    const [inputMessage, setInputMessage] = useState(null);
    const [messages, setMessages] = useState([]);
    const submit = () => {
        setMessages([...messages, inputMessage])
    }
    const onClickDelete = () => {
        setMessages([]);
    }
    useEffect(() => {
        axios.request(options)
            .then((response) => {
                setJoke(response.data.value);
            })
    }, [])
    return (
        <div className="main-page-container">
            <h1>Приветствую на моем сайте! Мой сайт частично о шутках про Чака Нориса</h1>
            <div>{joke}</div>
            <div className='chat-container'>
                <div className='messages-container'>{messages.map((el) => <div className='message-container'>{el}</div>)}</div>
                <div className='chat-bar'>
                    <TextField value={inputMessage} onChange={(e) => {setInputMessage(e.target.value)}} id="standard-basic" label="Введите текст" variant="standard" />
                    <Button variant="contained" color="success" onClick={submit}>
                         Отправить
                    </Button>
                    <IconButton onClick={onClickDelete} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}