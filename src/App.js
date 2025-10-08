import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/menu" element={<Home />} />
        <Route path="/"  element={<Menu/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
    
    </>
  );
}

export default App;
