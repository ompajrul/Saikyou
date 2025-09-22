// import logo from './logo.svg';
import './App.css';
import Navibar from './components/navibar';
import Foter from './components/foter';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navibar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Foter />
    </div>
  );
}

export default App;
