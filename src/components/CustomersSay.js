import pasta from "../assets/pasta.jpg";
import fish from "../assets/fish.jpg";
import greeksalad from "../assets/greeksalad.jpg";
import lemondessert from "../assets/lemondessert.jpg";
function CustomersSay(){
    return(
        <div className="testimonials-section">
            <section className="testimonials-title title black">Testimonials</section>
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
                        <img src={pasta} alt="Pasta" class="review-img"/>
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
                        <img src={fish} alt="Fish" class="review-img"/>
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
                        <img src={lemondessert} alt="Lemon dessert" class="review-img"/>
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
                        <img src={greeksalad} alt="Greek Salad" class="review-img"/>
                    </div>
                    <p className="paragraph black review">"The Greek salad was a refreshing medley that transported me straight to the Mediterranean."</p>
                    <p className="card-title black profile">- Ruth C.</p>
                </article>
            </section>
            {/* mobile viersion */}
            <section className="testimonials-box-mobile">
                    <div className="testimonials-left-mobile">
                        <i class="fa-solid fa-circle-chevron-left fa-2xl green"></i>
                    </div>
                    <article>
                        <div className="testimonials-content">
                            <div className="rating">
                                <i className="fa-solid fa-star yellow"></i>
                                <i className="fa-solid fa-star yellow"></i>
                                <i className="fa-solid fa-star yellow"></i>
                                <i className="fa-solid fa-star yellow"></i>
                                <i className="fa-regular fa-star yellow"></i>
                            </div>
                            <div className="img-container">
                                <img src={pasta} alt="Pasta" class="review-img"/>
                            </div>
                            <p className="paragraph black review">“The pasta was a delectable blend of rich flavors. The best pasta I've had in years!”</p>
                            <p className="card-title black profile">- Peter J.</p>
                        </div>
                    </article>
                    <div className="testimonials-right-mobile">
                        <i class="fa-solid fa-circle-chevron-right fa-2xl green"></i>
                    </div>
            </section>
        </div>
    )
};

export default CustomersSay;