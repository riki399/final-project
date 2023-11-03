import { Link, useLocation } from "react-router-dom";
import './style.css';

export default function Header() {
    const location = useLocation()
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
