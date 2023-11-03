import { Link, useLocation, useNavigate } from "react-router-dom";
import './style.css';
import { useEffect } from "react";

export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    
    useEffect(() => {
        if (location.pathname !== '/login' && !sessionStorage.getItem('userLogin')) {
            navigate('/register')
        }
    }, [location])

    if (location.pathname === '/register' || location.pathname === '/login') {
        return <></>
    }
    
    return (
        <div className="header-container"> 
            <div className="link-container"> 
                <Link to="/">Home</Link>
            </div>

            <div className="link-container">
                <Link to="/login">Log-in</Link>
            </div>
        </div>
    )
}
