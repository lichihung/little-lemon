import {Routes, Route} from 'react-router-dom';
import Homepage from "./Homepage";
import Specials from "./Specials";
import Chicago from "./Chicago";
import BookingPage from "./BookingPage";
function Main(){
    return(
        <main className="main">
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/about" element={<Chicago />}></Route>
                <Route path="/menu" element={<Specials />}></Route>
                <Route path="/reservations" element={<BookingPage />}></Route>
                <Route path="/order-online" element={<Specials />}></Route>
            </Routes>
        </main>
    )
};

export default Main;