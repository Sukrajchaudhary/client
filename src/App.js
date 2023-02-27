import './App.css';
import { Route, Routes } from "react-router-dom"
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import SIGNUP from './components/Login/SignUP';
import LOGIN from './components/Login/Login';
import UploadData  from './UploadData'
import Product from './Home/Product';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/Signup" element={<SIGNUP />} />
          <Route path="/Login" element={<LOGIN />} />
          <Route path="/" element={<UploadData />} /> 
          <Route path="/Product" element={<Product />} /> 
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
