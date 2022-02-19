import ToggleContent from "./pages/ToggleContent/ToggleContent";
import AboutContent from './pages/AboutContent/AboutContent';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div>
    <BrowserRouter>
    <ul>
        <li>
          <Link className="link" to="/">First Page</Link>
        </li>
        <li>
          <Link className="link" to="/about">Second Page</Link>
         </li>
    </ul>
      <Routes>
          <Route path="/" element={<ToggleContent/>} />
          <Route path="/about" element={<AboutContent/>} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
