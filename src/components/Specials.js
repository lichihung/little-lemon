import greeksalad from "../assets/greeksalad.jpg";
import deliveryicon from "../assets/bicycle.jpg";
import bruschetta from "../assets/bruchetta.svg";
import lemondessert from "../assets/lemondessert.jpg";
import {Link} from 'react-router-dom';
function Specials(){
    return(
        <div className="highlights-section">
                <div className="first-row">
                    <header className="banner">
                        <p className="title black">This week's specials!</p>
                    </header>
                    <section className="button">
                        <button className="btn card-title black" aria-label="Online Menu">
                        <Link to="/menu" className="card-title green link">Online Menu</Link>
                        </button>
                    </section>
                </div>
                <div className="second-row">
                    <section>
                        <article>
                            <img src={greeksalad} alt="Greek Salad" className="dish-image"/>
                            <div className="content">
                                <p className="card-title black dish-name">Greek Salad</p>
                                <p className="card-title pink dish-price">$ 12.99</p>
                                <p className="paragraph black dish-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                                <p className="highlight green order-delivery">Order a delivery</p>
                                <img src={deliveryicon} alt="order a delivery" className="deliveryicon"/>
                            </div>
                        </article>
                        <article>
                            <img src={bruschetta} alt="Bruschetta" className="dish-image"/>
                            <div className="content">
                                <p className="card-title black dish-name">Bruschetta</p>
                                <p className="card-title pink dish-price">$ 5.99</p>
                                <p className="paragraph black dish-description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                                <p className="highlight green order-delivery">Order a delivery</p>
                                <img src={deliveryicon} alt="order a delivery" className="deliveryicon"/>
                            </div>
                        </article>
                        <article>
                            <img src={lemondessert} alt="Lemon Dessert" className="dish-image"/>
                            <div className="content">
                                <p className="card-title black dish-name">Lemon Dessert</p>
                                <p className="card-title pink dish-price">$ 5.00</p>
                                <p className="paragraph black dish-description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                                <p className="highlight green order-delivery">Order a delivery</p>
                                <img src={deliveryicon} alt="order a delivery" className="deliveryicon"/>
                            </div>
                        </article>
                    </section>
                </div>
                {/* mobile version */}
                <div className="third-row">
                    <section>
                        <article>
                            <p className="card-title black dish-name">Greek Salad</p>
                            <p className="paragraph black dish-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            <p className="card-title pink dish-price">$ 12.99</p>
                            <div className="delivery-group">
                                <span className="highlight green order-delivery">Delivery</span>
                                <img src={deliveryicon} alt="order a delivery" className="deliveryicon"/>
                            </div>
                            <div className="dish-image-container">
                                <img src={greeksalad} alt="Greek Salad"/>
                            </div>
                        </article>
                        <article>
                            <p className="card-title black dish-name">Bruschetta</p>
                            <p className="paragraph black dish-description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                            <p className="card-title pink dish-price">$ 5.99</p>
                            <div className="delivery-group">
                                <span className="highlight green order-delivery">Delivery</span>
                                <img src={deliveryicon} alt="order a delivery" className="deliveryicon"/>
                            </div>
                            <div className="dish-image-container">
                                <img src={bruschetta} alt="Bruschetta"/>
                            </div>
                        </article>
                        <article>
                            <p className="card-title black dish-name">Lemon Dessert</p>
                            <p className="paragraph black dish-description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            <p className="card-title pink dish-price">$ 5.00</p>
                            <div className="delivery-group">
                                <span className="highlight green order-delivery">Delivery</span>
                                <img src={deliveryicon} alt="order a delivery" className="deliveryicon"/>
                            </div>
                            <div className="dish-image-container">
                                <img src={lemondessert} alt="Lemon Dessert"/>
                            </div>
                        </article>
                    </section>
                </div>
            </div>
    )
};

export default Specials;