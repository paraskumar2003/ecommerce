
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import DataProvider from './context/Dataprovider'
import DetailView from "./components/Details/DetailView";
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from "./components/Cart/Cart";

function App() {
  return <DataProvider>
  <BrowserRouter>
  <Header />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/product/:id" element={<DetailView />} />
  <Route path="/cart/:id" element={<Cart />} />
  
  </Routes>
  </BrowserRouter>
  </DataProvider>;
}

export default App;
