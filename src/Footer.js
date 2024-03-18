import logo from "../src/assets/Logo.svg";
import {Link} from 'react-router-dom';
function Footer(){
    return(
        <footer className="footer">
            <div>
                <img src={logo} alt="logo" aria-label="logo"/>
            </div>
            <div>
                <h4 className="card-title black">Doormat Navigation</h4>
                <ul>
                    <li><Link to="/home" className="paragraph black" aria-label="Home">Home</Link></li>
                    <li><Link to="/about" className="paragraph black" aria-label="About">About</Link></li>
                    <li><Link to="/menu" className="paragraph black" aria-label="Menu">Menu</Link></li>
                    <li><Link to="/reservations" className="paragraph black" aria-label="Reservations">Reservations</Link></li>
                    <li><Link to="/order-online" className="paragraph black" aria-label="Order online">Order online</Link></li>
                    <li><Link to="/login" className="paragraph black" aria-label="Login">Login</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="card-title black">Contact</h4>
                <ul>
                    <li className="paragraph black">Address</li>
                    <li className="paragraph black">Phone number</li>
                    <li className="paragraph black">Email</li>
                </ul>
            </div>
            <div>
                <h4 className="card-title black">Social Media Links</h4>
                <ul>
                    <li className="paragraph black">Address</li>
                    <li className="paragraph black">Phone number</li>
                    <li className="paragraph black">Email</li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer;