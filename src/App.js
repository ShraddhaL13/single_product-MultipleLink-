import './App.css';
import Nav from './Main/Nav'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Main/Home';
import Covid from './Covid/Covid';
import Login from './Login/Login';
import Crypto from './Cryptocurrency/CryptoFile';



function App() {
  return (
    <>    <div className="w-100">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index to="/" element={<Home />} />          
          <Route path="/covid" element={<Covid />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Crypto" element={<Crypto />} />
         

        </Routes>
      </BrowserRouter>

    </div>
    </>

  );
}

export default App;
