import greeksalad from "../src/assets/greeksalad.jpg";
import deliveryicon from "../src/assets/Dishicon.svg";
import bruschetta from "../src/assets/bruchetta.svg";
import lemondessert from "../src/assets/lemondessert.jpg";
function Specials(){
    return(
        <div className="highlights-section">
                <div className="first-row">
                    <section className="banner">
                        <p class="title black">This week's specials!</p>
                    </section>
                    <section className="button">
                        <button class="btn card-title black">Online Menu</button>
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
                                <img src={deliveryicon} alt="order a delivery" id="deliveryicon"/>
                            </div>
                        </article>
                        <article>
                            <img src={bruschetta} alt="Bruschetta" className="dish-image"/>
                            <div className="content">
                                <p class="card-title black dish-name">Bruschetta</p>
                                <p class="card-title pink dish-price">$ 5.99</p>
                                <p class="paragraph black dish-description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                                <p class="highlight green order-delivery">Order a delivery</p>
                                <img src={deliveryicon} alt="order a delivery" id="deliveryicon"/>
                            </div>
                        </article>
                        <article>
                            <img src={lemondessert} alt="Lemon Dessert" className="dish-image"/>
                            <div className="content">
                                <p class="card-title black dish-name">Lemon Dessert</p>
                                <p class="card-title pink dish-price">$ 5.00</p>
                                <p class="paragraph black dish-description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                                <p class="highlight green order-delivery">Order a delivery</p>
                                <img src={deliveryicon} alt="order a delivery" id="deliveryicon"/>
                            </div>
                        </article>
                    </section>
                </div>
            </div>
    )
};

export default Specials;