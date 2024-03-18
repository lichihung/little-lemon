import {Link} from 'react-router-dom';
import FullScreenSection from "./FullScreenSection";

function BookingDetail(props) {

    return(
        <>
        <FullScreenSection
            isDarkBackground
            backgroundColor="#495557"
            py={16}>
            <div className="detail-section">
                <header className="yellow title">Your reservation</header>
                <section>
                    <p className="card-title">Name: {props.userData.username}</p>
                    <p className="card-title">Reserved date: {props.userData.resdate}</p>
                    <p className="card-title">Reserved time: {props.userData.restime}</p>
                    <p className="card-title">Number of guests: {props.userData.guests}</p>
                    <p className="card-title">Occasion: {props.userData.occasion}</p>
                    <p className="card-title">Your contact info: {props.userData.usercontact}</p>
                    {props.userData.usercontact === "Phone number" ?
                    <p className="card-title">{props.userData.usercontact}: +1 {props.userData.userPhoneNumber}</p> :
                    <p className="card-title">{props.userData.usercontact}: {props.userData.userEmail}</p>
                    }
                </section>
                <button className="btn detail-btn1" aria-label="Back to home"><Link to="/" className="card-title black">Back to home</Link></button>
            </div>
        </FullScreenSection>
        </>
    )
};
export default BookingDetail;