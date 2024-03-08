import restaurantfood from "../src/assets/restaurantfood.jpg";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";

function Homepage(){
    return(
        <>
            <div className="hero-section">
                <div className="hero-section-text">
                    <p class="title yellow">Little Lemon</p>
                    <p class="subtitle white">Chicago</p>
                    <p class="lead white">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button class="btn card-title black">Reserve a table</button>
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