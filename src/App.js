import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Product from './components/home/Product';
import Work from './components/views/Work';
import Competition from './components/competition/Competition';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product/>} />
          <Route path="/competition" element={<Competition/>} />
          <Route path="/test" element={<Work/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
