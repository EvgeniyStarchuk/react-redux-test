import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductDetail from './components/ProductDetail';
import ProductListing from './components/ProductListing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListing/>} />
          <Route path="/product/:productId" element={<ProductDetail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
