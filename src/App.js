import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import MainPage from './pages/main-page';
import LoginPage from './pages/login-page';
import Header from './layouts/header';
import RegisterPage from './pages/register-page';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
