import './App.css';
import { Routes, Route } from 'react-router';
import Countries from './components/Countries';
import Details from './components/Details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Countries />} />
      <Route path="/detail/:country" element={<Details />} />
    </Routes>
  );
}

export default App;
