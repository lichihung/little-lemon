import './App.css';
import './css/home.css';
import './css/specials.css';
import './css/testimonials.css';
import './css/about.css';
import './css/footer.css';
import './css/booking.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
