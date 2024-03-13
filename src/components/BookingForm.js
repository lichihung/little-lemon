import {useState, React} from "react";

function BookingForm(props){
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");
    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        props.updateTimes(newDate);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {date, time, guests, occasion};
        props.onSubmit(formData); // Pass formData to submitForm function
    }

    return(
        <>
            <form className="bookingform" onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Book now</h2>
                    <label htmlFor="res-date">Choose date</label>
                    <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={handleDateChange}
                    />

                    <label htmlFor="res-time">Choose time</label>
                    <select
                    id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    >
                    {/* If running the test, this should be skipped. */}
                    {props.availableTimes.map((timeoption, index) => (
                        <option key={index} value={timeoption}>{timeoption}</option>
                    ))}
                    </select>

                    <label htmlFor="guests">Number of guests</label>
                    <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    />

                    <label htmlFor="occasion">Occasion</label>
                    <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>

                    <input type="submit" value="Make Your reservation" />
                </fieldset>
            </form>
        </>
    )
};

export default BookingForm;