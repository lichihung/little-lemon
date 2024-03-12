import {Routes, Route} from 'react-router-dom';
import {useReducer} from 'react';
import Homepage from "./components/Homepage";
import Specials from "./components/Specials";
import Chicago from "./components/Chicago";
import BookingPage from "./components/BookingPage";
import {fetchAPI} from "https://drive.google.com/file/d/1PMLIeT_CGv6oGL7WoXa-ubgcSspRfyBL/view?usp=sharing";

// const initializeTimes = () => ([
//     "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
// ]);
const initializeTimes = async () => {
    const today = new Date().toISOString().split('T')[0];

    try{
        const times = await fetchAPI(today);
        return times;
    } catch (error){
        console.error('Error fetching initial times', error.message)
        return [
            "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
        ];
    }
};

const reducer = async (state, action) => {
    switch (action.type) {
        case "updateTimes":
            const selectedDate = action.payload;
            try {
                const times = await fetchAPI(selectedDate);
                return times;
            } catch (error){
                console.error('Error updating times:', error.message);
                return state;
            }
        default:
            // It's a good practice to return the current state by default
            return state;
    }
};

function Main(){
    const [availableTimes,dispatch] = useReducer(reducer, initializeTimes());

    return(
        <main className="main">
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/about" element={<Chicago />}></Route>
                <Route path="/menu" element={<Specials />}></Route>
                <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch}/>}></Route>
                <Route path="/order-online" element={<Specials />}></Route>
            </Routes>
        </main>
    )
};

export default Main;
export {initializeTimes, reducer};