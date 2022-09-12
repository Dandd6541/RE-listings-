import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import LandingPage from '../LandingPage/LandingPage';
import NewListingPage from '../NewListingPage/NewListingPage';
import ListingsPage from '../ListingsPage/ListingsPage';
import * as listingsAPI from "../../utilities/listings-api";
import NavBar from '../../components/NavBar/NavBar';  
import './App.css';
 
export default function App() {
  const [user, setUser] = useState(getUser());
  const [listings, setListings] = useState([]);
  const navigate = useNavigate;
  const routeChange = (path) => {
    navigate(path);
  };
  
  useEffect(function() {
    async function getListings() {
      const allListings = await listingsAPI.getAll();
      // console.log(allListings);
      setListings(allListings);
      
    } 
    getListings();
  },[]); 
  

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/newlistings' element={<NewListingPage user={user} setUser={setUser} listings={listings}  setListings={setListings} />} />
            <Route path="/" element={<LandingPage />} />
            
            <Route path='/listings' element={<ListingsPage user={user} setUser={setUser}  listings={listings}  routeChange={routeChange} />} />
           
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
