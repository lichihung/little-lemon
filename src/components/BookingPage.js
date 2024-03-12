import BookingForm from "./BookingForm";

function BookingPage(props){
    return(
        <>
        <BookingForm availableTimes={props.availableTimes} updateTimes={props.updateTimes} />
        </>
    )
};

export default BookingPage;