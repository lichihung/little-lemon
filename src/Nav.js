import icon1 from "../src/assets/icon_hamburger.svg";
import icon2 from "../src/assets/basket.svg";
function Nav(){
    return (
        <nav className="nav">
            <div className="navigation-links">
                <ul>
                    <li><a href="/home" class="card-title green">Home</a></li>
                    <li><a href="/about" class="card-title green">About</a></li>
                    <li><a href="/Menu" class="card-title green">Menu</a></li>
                    <li><a href="/reservations" class="card-title green">Reservations</a></li>
                    <li><a href="/order-online" class="card-title green">Order online</a></li>
                    <li><a href="/login" class="card-title green">Login</a></li>
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