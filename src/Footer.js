import logo from "../src/assets/Logo.svg";
function Footer(){
    return(
        <footer className="footer">
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div>
                <h4 class="card-title black">Doormat Navigation</h4>
                <ul>
                    <li><a href="/home" class="paragraph black">Home</a></li>
                    <li><a href="/about" class="paragraph black">About</a></li>
                    <li><a href="/Menu" class="paragraph black">Menu</a></li>
                    <li><a href="/reservations" class="paragraph black">Reservations</a></li>
                    <li><a href="/order-online" class="paragraph black">Order online</a></li>
                    <li><a href="/login" class="paragraph black">Login</a></li>
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