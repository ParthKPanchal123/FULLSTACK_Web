import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes , Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Placeorder from './Pages/Placeholder/Placeorder';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/placeorder" element={<Placeorder/>}/>
        </Routes>
    </div>
  );
}

export default App;
