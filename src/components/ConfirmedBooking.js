import {Link} from 'react-router-dom';
import FullScreenSection from "./FullScreenSection";

function ConfirmedBooking(){
    return(
        <>
        <FullScreenSection
            isDarkBackground
            backgroundColor="#495557"
            py={16}>
            <header className="title">Table reserved!</header>
            <button className="btn" aria-label="Back to reservations"><Link to="/reservations" class="card-title black">Back to reservations</Link></button>
            </FullScreenSection>

        </>
    )
};

export default ConfirmedBooking;