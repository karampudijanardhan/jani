import logo from './logo.svg';
import './App.css';
import './About.css'
import About from './ecomerce/About';
import { Header } from './ecomerce/Header';
import Home from './ecomerce/Home';
import { Footer } from './ecomerce/Footer';


function App() {
  return (
    <div className="App">
    <Header />
    <Home />
    <Footer/>
    </div>
  );
}

export default App;
