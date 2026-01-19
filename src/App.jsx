import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Button from './components/Button';

export default function App() {
    return (
        <BrowserRouter>
            <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
                <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
                <Link to="/contact" style={{ marginRight: '20px' }}>Contact</Link>
                <Button />
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}