import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Card from './pages/Card';


function App() {
  return (
   
      <div className="font-sans">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Menu" element={<ProductList />} />
            <Route path="/card" element={<Card />} />
          </Routes>
        </BrowserRouter>
      </div>
  
  );
}

export default App;
