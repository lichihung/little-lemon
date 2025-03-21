import {Routes, Route, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Homepage from "./components/Homepage";
import Specials from "./components/Specials";
import Chicago from "./components/Chicago";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from './components/ConfirmedBooking';
import BookingDetail from './components/BookingDetail';
import {fetchAPI, submitAPI} from "./mockAPI.js";

function Main(){
    // const [availableTimes,dispatch] = useReducer(reducer, initializeTimes());
    const [availableTimes, setAvailableTimes] = useState([]);
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Define an async function inside useEffect to fetch initial times
        const initializeTimes = async () => {
            const today = new Date().toISOString().split('T')[0];
            try {
                const times = await fetchAPI(today);
                setAvailableTimes(times);
            } catch (error) {
                console.error('Error fetching initial times', error.message);
                setAvailableTimes([
                    "17:00", "18:00", "19:00", "20:00", "21:00", "22:00" // Default times in case of error
                ]);
            }
        };
        initializeTimes(); // Call the function
    }, []); // Empty dependency array means this runs once on component mount

    const updateTimes = async (selectedDate) => {
        try {
            const times = await fetchAPI(selectedDate);
            setAvailableTimes(times);
        } catch (error) {
            console.error('Error updating times:', error.message);
            alert(error.message);
        }
    };

    const submitForm = async (formData) => {
        try {
            const result = await submitAPI(formData);
            if (result === true){
                navigate('/confirm-booking');
                setUserData(formData);
            } else {
                alert("There was an issue with your booking. Please try again.")
            }
        } catch (error) {
            console.error('Error submitting booking:', error.message);
        }
    }

    return(

        <main className="main">
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/about" element={<Chicago />}></Route>
                <Route path="/menu" element={<Specials />}></Route>
                <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm}/>}></Route>
                <Route path="/order-online" element={<Specials />}></Route>
                <Route path="/confirm-booking" element={<ConfirmedBooking />}></Route>
                <Route path="/your-reservation" element={<BookingDetail userData={userData}/>}></Route>
            </Routes>
        </main>

    )
};

export default Main;
// export {initializeTimes, reducer};