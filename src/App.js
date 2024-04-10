import logo from './logo.svg';
import './App.css';
import CityPage from './Pages/CityPage';
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<CityPage />} />
    </Routes>
  );
}

export default App;
