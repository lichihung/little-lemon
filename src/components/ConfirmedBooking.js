import {Link} from 'react-router-dom';

function ConfirmedBooking(){
    return(
        <>
            <h1>Booking confirmed!</h1>
            <button><Link to="/reservations" class="card-title green">Back to reservasions</Link></button>
        </>
    )
};

export default ConfirmedBooking;