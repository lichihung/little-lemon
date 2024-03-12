import icon1 from "./assets/icon_hamburger.svg";
import icon2 from "./assets/basket.svg";
import {Link} from 'react-router-dom';

function Nav(){
    return (
        <nav className="nav">
            <div className="navigation-links">
                <ul>
                    <li><Link to="/" class="card-title green">Home</Link></li>
                    <li><Link to="/about" class="card-title green">About</Link></li>
                    <li><Link to="/menu" class="card-title green">Menu</Link></li>
                    <li><Link to="/reservations" class="card-title green">Reservations</Link></li>
                    <li><Link to="/order-online" class="card-title green">Order online</Link></li>
                    <li><Link to="/login" class="card-title green">Login</Link></li>
                </ul>
            </div>
            <div class="menu-icon" onClick="toggleMenu()">
                <img src={icon2} alt="hamburger menu icon" />
                <img src={icon1} alt="hamburger menu icon" />
            </div>
        </nav>
    )
};

export default Nav;