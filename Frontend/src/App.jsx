import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';


function App() {
  return (
   
      <div className="font-sans">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductList />} />
          </Routes>
        </BrowserRouter>
      </div>
  
  );
}

export default App;
