import logo from "../src/assets/Logo.svg";
import {Link} from 'react-router-dom';
function Footer(){
    return(
        <footer className="footer">
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div>
                <h4 class="card-title black">Doormat Navigation</h4>
                <ul>
                    <li><Link to="/home" class="paragraph black">Home</Link></li>
                    <li><Link to="/about" class="paragraph black">About</Link></li>
                    <li><Link to="/menu" class="paragraph black">Menu</Link></li>
                    <li><Link to="/reservations" class="paragraph black">Reservations</Link></li>
                    <li><Link to="/order-online" class="paragraph black">Order online</Link></li>
                    <li><Link to="/login" class="paragraph black">Login</Link></li>
                </ul>
            </div>
            <div>
                <h4 class="card-title black">Contact</h4>
                <ul>
                    <li class="paragraph black">Address</li>
                    <li class="paragraph black">Phone number</li>
                    <li class="paragraph black">Email</li>
                </ul>
            </div>
            <div>
                <h4 class="card-title black">Social Media Links</h4>
                <ul>
                    <li class="paragraph black">Address</li>
                    <li class="paragraph black">Phone number</li>
                    <li class="paragraph black">Email</li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer;