import restaurantfood from "../assets/restaurantfood.jpg";
import Specials from "../components/Specials";
import CustomersSay from "../components/CustomersSay";
import Chicago from "../components/Chicago";
import {Link} from 'react-router-dom';

function Homepage(){
    return(
        <>
            <div className="hero-section">
                <div className="hero-section-text">
                    <p className="title yellow">Little Lemon</p>
                    <p className="subtitle white">Chicago</p>
                    <p className="lead white">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button className="btn" aria-label="Reserve a table"><Link to="/reservations" className="card-title black">Reserve a table</Link></button>
                </div>
                <div className="hero-section-image">
                    <img src={restaurantfood} alt="restaurant food" />
                </div>
            </div>
            <Specials />
            <CustomersSay />
            <Chicago />
        </>

    )
};

export default Homepage;