import './App.css';
import Home from './home/Home';
import Team from './team/Team';
import Contact from './contact/Contact';
import About from './about/About';
import Products from './products/Products';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductPage from './products/ProductPage';
import productsData from "./productData.json";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products productsData={productsData} />} />


        {/* Products */}
        <Route path="/a4-paper" element={<ProductPage product={productsData.a4Paper}/>} />
        <Route path="/a3-paper" element={<ProductPage product={productsData.a3Paper}/>} />
        <Route path="/a4-paper-coated" element={<ProductPage product={productsData.a4PaperCoated}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
