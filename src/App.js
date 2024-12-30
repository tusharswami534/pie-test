import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Product from './components/home/Product';
import Work from './components/views/Work';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product/>} />
          <Route path="/test" element={<Work/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
