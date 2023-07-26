import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/quote';

function App() {
  return (
    <>
      <nav className='navbar'>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/Quote">Quote</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
