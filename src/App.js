import './App.css';

import { BrowserRouter, Routes,Route, Link, } from 'react-router-dom';


import Home from './Home';
import Lodging from './Lodging';
import Restaurants from './Restaurants';
import GroceryStores from './GroceryStores';
import Entertainment from './Entertainment';
import Sightseeing from './Sightseeing';
import Transportation from './Transportation';
import Booking from './Booking';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="header">
          <h1>Island of Taniti</h1>
        </div>
       

        <nav className ="nav-bar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/lodging" className="nav-link">Lodging</Link>
          <Link to="/restaurants" className="nav-link">Restaurants</Link>
          <Link to="/grocery-stores" className="nav-link">Grocery Stores</Link>
          <Link to="/entertainment" className="nav-link">Entertainment</Link>
          <Link to="/sightseeing" className="nav-link">Sightseeing</Link>
          <Link to="/transportation" className="nav-link" >Transportation</Link>
          <Link to="/booking" className="nav-link">Booking</Link>  
        </nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lodging" element={<Lodging />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/grocery-stores" element={<GroceryStores />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/sightseeing" element={<Sightseeing />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
