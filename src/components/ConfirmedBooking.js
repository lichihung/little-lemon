import {Link} from 'react-router-dom';
import FullScreenSection from "./FullScreenSection";

function ConfirmedBooking(){
    return(
        <>
        <FullScreenSection
            isDarkBackground
            backgroundColor="#495557"
            py={16}>
            <div className="confirm-section">
                <section className="confirm-box">
                    <i className="fa-solid fa-circle-check green fa-2xl"></i>
                    <header className="subtitle green">Table Reserved</header>
                    <p className="highlight black">Your confirmation number is 30395.</p>
                </section>
                <section className="confirm-note">
                    <header className="card-title">Note:</header>
                    <i className="fa-solid fa-check confirm-note-check1"></i>
                    <p className="confirm-note-text1 lead">Please check your text message/email to receive a link through which you can view your reservation.</p>
                    <i className="fa-solid fa-check confirm-note-check2"></i>
                    <p className="confirm-note-text2 lead">Any changes are required to be made a day prior to your reservation date.</p>
                </section>
                <section className="confirm-welcome">
                    <p className="subtitle">We look forward to your coming!</p>
                </section>
                <button className="btn confirmed-btn1" aria-label="Back to home"><Link to="/" className="card-title black">Back to home</Link></button>
                <button className="btn confirmed-btn2" aria-label="View your reservation"><Link to="/your-reservation" className="card-title black">View reservation</Link></button>
            </div>
        </FullScreenSection>
        </>
    )
};

export default ConfirmedBooking;