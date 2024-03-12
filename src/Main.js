import {Routes, Route} from 'react-router-dom';
import {useReducer} from 'react';
import Homepage from "./components/Homepage";
import Specials from "./components/Specials";
import Chicago from "./components/Chicago";
import BookingPage from "./components/BookingPage";

const initializeTimes = () => ([
    "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
]);
const reducer = (state, action) => {
    switch (action.type) {
        case "updateTimes":
            // Placeholder for now, should update based on action.payload (the selected date)
            // For now, returns the state unchanged
            return state;
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