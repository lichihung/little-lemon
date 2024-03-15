import greeksalad from "../assets/greeksalad.jpg";
import deliveryicon from "../assets/bicycle.jpg";
import bruschetta from "../assets/bruchetta.svg";
import lemondessert from "../assets/lemondessert.jpg";
function Specials(){
    return(
        <div className="highlights-section">
                <div className="first-row">
                    <header className="banner">
                        <p class="title black">This week's specials!</p>
                    </header>
                    <section className="button">
                        <button class="btn card-title black" aria-label="Online Menu">Online Menu</button>
                    </section>
                </div>
                <div className="second-row">
                    <section>
                        <article>
                            <img src={greeksalad} alt="Greek Salad" className="dish-image"/>
                            <div className="content">
                                <p class="card-title black dish-name">Greek Salad</p>
                                <p class="card-title pink dish-price">$ 12.99</p>
                                <p class="paragraph black dish-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                                <p class="highlight green order-delivery">Order a delivery</p>
                                <img src={deliveryicon} alt="order a delivery" className="deliveryicon"/>
                            </div>
                        </article>
                        <article>
                            <img src={bruschetta} alt="Bruschetta" className="dish-image"/>
                            <div className="content">
                                <p class="card-title black dish-name">Bruschetta</p>
                                <p class="card-title pink dish-price">$ 5.99</p>
                                <p class="paragraph black dish-description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                                <p class="highlight green order-delivery">Order a delivery</p>
                                <img src={deliveryicon} alt="order a delivery" className="deliveryicon"/>
                            </div>
                        </article>
                        <article>
                            <img src={lemondessert} alt="Lemon Dessert" className="dish-image"/>
                            <div className="content">
                                <p class="card-title black dish-name">Lemon Dessert</p>
                                <p class="card-title pink dish-price">$ 5.00</p>
                                <p class="paragraph black dish-description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                                <p class="highlight green order-delivery">Order a delivery</p>
                                <img src={deliveryicon} alt="order a delivery" className="deliveryicon"/>
                            </div>
                        </article>
                    </section>
                </div>
                {/* mobile version */}
                <div className="third-row">
                    <section>
                        <article>
                            <p class="card-title black dish-name">Greek Salad</p>
                            <p class="paragraph black dish-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            <p class="card-title pink dish-price">$ 12.99</p>
                            <div className="delivery-group">
                                <span class="highlight green order-delivery">Delivery</span>
                                <img src={deliveryicon} alt="order a delivery" className="deliveryicon"/>
                            </div>
                            <div className="dish-image-container">
                                <img src={greeksalad} alt="Greek Salad"/>
                            </div>
                        </article>
                        <article>
                            <p class="card-title black dish-name">Bruschetta</p>
                            <p class="paragraph black dish-description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                            <p class="card-title pink dish-price">$ 5.99</p>
                            <div className="delivery-group">
                                <span class="highlight green order-delivery">Delivery</span>
                                <img src={deliveryicon} alt="order a delivery" className="deliveryicon"/>
                            </div>
                            <div className="dish-image-container">
                                <img src={bruschetta} alt="Bruschetta"/>
                            </div>
                        </article>
                        <article>
                            <p class="card-title black dish-name">Lemon Dessert</p>
                            <p class="paragraph black dish-description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            <p class="card-title pink dish-price">$ 5.00</p>
                            <div className="delivery-group">
                                <span class="highlight green order-delivery">Delivery</span>
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