import icon1 from "./assets/basket.svg";
import icon2 from "./assets/icon_hamburger.svg";
import {Link} from 'react-router-dom';
import {useState} from 'react';

function Nav(){
    const [dropdownClicked, setDropdownClicked] = useState(false);
    const handleDropdown = () =>{
        if(dropdownClicked === false){
            setDropdownClicked(true);
        }
        else {
            setDropdownClicked(false);
        }
    };

    return (
        <nav className="nav">
            <div className="navigation-links">
                <ul>
                    <li><Link to="/" className="card-title green link" aria-label="Home">Home</Link></li>
                    <li><Link to="/about" className="card-title green link" aria-label="About">About</Link></li>
                    <li><Link to="/menu" className="card-title green link" aria-label="Menu">Menu</Link></li>
                    <li><Link to="/reservations" className="card-title green link" aria-label="Reservations">Reservations</Link></li>
                    <li><Link to="/order-online" className="card-title green link" aria-label="Order online">Order online</Link></li>
                    <li><Link to="/login" className="card-title green link" aria-label="Login">Login</Link></li>
                </ul>
            </div>

            <div className="menu-icon">
                <img src={icon1} alt="basket icon" />
                <div className="dropdown" >
                    <img src={icon2} alt="hamburger menu icon" className="dropdown-img" onClick={handleDropdown} aria-label="menu dropdown"/>
                    {dropdownClicked ?
                    <div className="dropdown-content">
                        <Link to="/" className="card-title green link">Home</Link>
                        <Link to="/about" className="card-title green link">About</Link>
                        <Link to="/menu" className="card-title green link">Menu</Link>
                        <Link to="/reservations" className="card-title green link">Reservations</Link>
                        <Link to="/order-online" className="card-title green link">Order online</Link>
                        <Link to="/login" className="card-title green last-link">Login</Link>
                    </div>
                    : null}

                </div>
            </div>
        </nav>
    )
};

export default Nav;