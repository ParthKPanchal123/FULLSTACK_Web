import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Placeorder from './Pages/Placeholder/Placeorder';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';

function App() {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            {showLogin && <Login setShowLogin={setShowLogin} />}
            <div className="App">
                <Navbar setShowLogin={setShowLogin} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/placeorder" element={<Placeorder />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
