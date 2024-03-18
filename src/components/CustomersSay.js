import pasta from "../assets/pasta.jpg";
import fish from "../assets/fish.jpg";
import greeksalad from "../assets/greeksalad.jpg";
import lemondessert from "../assets/lemondessert.jpg";

function CustomersSay(){
    return(
        <div className="testimonials-section">
            <header className="testimonials-title title black">Testimonials</header>
            <section className="testimonials-box">
                <article >
                    <div className="testimonials-content">
                    <div className="rating">
                        <i className="fa-solid fa-star yellow"></i>
                        <i className="fa-solid fa-star yellow"></i>
                        <i className="fa-solid fa-star yellow"></i>
                        <i className="fa-solid fa-star yellow"></i>
                        <i className="fa-regular fa-star yellow"></i>
                    </div>
                    <div className="img-container">
                        <img src={pasta} alt="Pasta" className="review-img"/>
                    </div>
                    <p className="paragraph black review">“The pasta was a delectable blend of rich flavors. The best pasta I've had in years!”</p>
                    <p className="card-title black profile">- Peter J.</p>
                    </div>
                </article>
                <article className="testimonials-content">
                    <div className="rating">
                        <i className="fa-solid fa-star yellow"></i>
                        <i className="fa-solid fa-star yellow"></i>
                        <i className="fa-solid fa-star yellow"></i>
                        <i className="fa-solid fa-star yellow"></i>
                        <i className="fa-solid fa-star yellow"></i>
                    </div>
                    <div className="img-container">
                        <img src={fish} alt="Fish" className="review-img"/>
                    </div>
                    <p className="paragraph black review">"The fish was a culinary masterpiece, with its delicate seasoning that elevated each bite."</p>
                    <p className="card-title black profile">- Jane V.</p>
                </article>
                <article className="testimonials-content">
                    <div className="rating">
                        <i className="fa-solid fa-star yellow"></i>
                        <i className="fa-solid fa-star yellow"></i>
                        <i className="fa-solid fa-star yellow"></i>
                        <i className="fa-solid fa-star yellow"></i>
                        <i className="fa-solid fa-star yellow"></i>
                    </div>
                    <div className="img-container">
                        <img src={lemondessert} alt="Lemon dessert" className="review-img"/>
                    </div>
                    <p className="paragraph black review">"The lemon cake is the best! It was refreshingly light yet indulgently satisfying."</p>
                    <p className="card-title black profile">- Lucas R.</p>
                </article>
                <article className="testimonials-content">
                    <div className="rating">
                        <i className="fa-solid fa-star yellow"></i>
                        <i className="fa-solid fa-star yellow"></i>
                        <i className="fa-solid fa-star yellow"></i>
                        <i className="fa-solid fa-star yellow"></i>
                        <i className="fa-regular fa-star yellow"></i>
                    </div>
                    <div className="img-container">
                        <img src={greeksalad} alt="Greek Salad" className="review-img"/>
                    </div>
                    <p className="paragraph black review">"The Greek salad was a refreshing medley that transported me straight to the Mediterranean."</p>
                    <p className="card-title black profile">- Ruth C.</p>
                </article>
            </section>
            {/* mobile viersion */}
            <div className="testimonials-animation">
            <ul className="slides">
                <input type="radio" id="control-1" name="control" defaultChecked/>
                <input type="radio" id="control-2" name="control" />
                <input type="radio" id="control-3" name="control" />
                <input type="radio" id="control-4" name="control" />

                <div className="navigator slide-1">
                    <label htmlFor="control-3">
                    <i className="fas fa-chevron-left"></i>
                    </label>
                    <label htmlFor="control-2">
                    <i className="fas fa-chevron-right"></i>
                    </label>
                </div>

                <div className="navigator slide-2">
                    <label htmlFor="control-1">
                    <i className="fas fa-chevron-left"></i>
                    </label>
                    <label htmlFor="control-3">
                    <i className="fas fa-chevron-right"></i>
                    </label>
                </div>

                <div className="navigator slide-3">
                    <label htmlFor="control-2">
                    <i className="fas fa-chevron-left"></i>
                    </label>
                    <label htmlFor="control-4">
                    <i className="fas fa-chevron-right"></i>
                    </label>
                </div>

                <div className="navigator slide-4">
                    <label htmlFor="control-3">
                    <i className="fas fa-chevron-left"></i>
                    </label>
                    <label htmlFor="control-1">
                    <i className="fas fa-chevron-right"></i>
                    </label>
                </div>

                <li className="slide">
                    <section className="testimonials-box-mobile">
                            <div className="testimonials-content">
                                <div className="rating">
                                    <i className="fa-solid fa-star yellow"></i>
                                    <i className="fa-solid fa-star yellow"></i>
                                    <i className="fa-solid fa-star yellow"></i>
                                    <i className="fa-solid fa-star yellow"></i>
                                    <i className="fa-regular fa-star yellow"></i>
                                </div>
                                <div className="img-container">
                                    <img src={pasta} alt="Pasta" className="review-img"/>
                                </div>
                                <p className="paragraph black review">“The pasta was a delectable blend of rich flavors. The best pasta I've had in years!”</p>
                                <p className="card-title black profile">- Peter J.</p>
                            </div>
                    </section>
                </li>
                <li className="slide">
                    <section className="testimonials-box-mobile">
                        <div className="testimonials-content">
                            <div className="rating">
                                <i className="fa-solid fa-star yellow"></i>
                                <i className="fa-solid fa-star yellow"></i>
                                <i className="fa-solid fa-star yellow"></i>
                                <i className="fa-solid fa-star yellow"></i>
                                <i className="fa-solid fa-star yellow"></i>
                            </div>
                            <div className="img-container">
                                <img src={fish} alt="Fish" className="review-img"/>
                            </div>
                            <p className="paragraph black review">"The fish was a culinary masterpiece, with its delicate seasoning that elevated each bite."</p>
                            <p className="card-title black profile">- Jane V.</p>
                        </div>
                    </section>
                </li>
                <li className="slide">
                    <section className="testimonials-box-mobile">
                        <div className="testimonials-content">
                            <div className="rating">
                                <i className="fa-solid fa-star yellow"></i>
                                <i className="fa-solid fa-star yellow"></i>
                                <i className="fa-solid fa-star yellow"></i>
                                <i className="fa-solid fa-star yellow"></i>
                                <i className="fa-solid fa-star yellow"></i>
                            </div>
                            <div className="img-container">
                                <img src={lemondessert} alt="Lemon dessert" className="review-img"/>
                            </div>
                            <p className="paragraph black review">"The lemon cake is the best! It was refreshingly light yet indulgently satisfying."</p>
                            <p className="card-title black profile">- Lucas R.</p>
                        </div>
                    </section>
                </li>
                <li className="slide">
                    <section className="testimonials-box-mobile">
                        <div className="testimonials-content">
                            <div className="rating">
                                <i className="fa-solid fa-star yellow"></i>
                                <i className="fa-solid fa-star yellow"></i>
                                <i className="fa-solid fa-star yellow"></i>
                                <i className="fa-solid fa-star yellow"></i>
                                <i className="fa-regular fa-star yellow"></i>
                            </div>
                            <div className="img-container">
                                <img src={greeksalad} alt="Greek Salad" className="review-img"/>
                            </div>
                            <p className="paragraph black review">"The Greek salad was a refreshing medley that transported me straight to the Mediterranean."</p>
                            <p className="card-title black profile">- Ruth C.</p>
                        </div>
                    </section>
                </li>

                <div className="controls-visible">
                    <label htmlFor="control-1"></label>
                    <label htmlFor="control-2"></label>
                    <label htmlFor="control-3"></label>
                    <label htmlFor="control-4"></label>
                </div>
                </ul>
            </div>
        </div>
    )
};

export default CustomersSay;