import logo from "./assets/Logo.svg";
import {Link} from 'react-router-dom';

function Header (){
    return (
        <header className="header">
            <Link to="/" className="card-title green link" aria-label="Home"><img src={logo} alt="logo"/></Link>
        </header>
    )
}

export default Header;
