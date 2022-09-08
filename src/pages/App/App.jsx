import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewListingPage from '../NewListingPage/NewListingPage';
import ListingsPage from '../ListingsPage/ListingsPage';
import * as listingsAPI from "../../utilities/listings-api";
//  import ListingsPage from '../ListingsPage/ListingsPage'; 
import NavBar from '../../components/NavBar/NavBar';  
import './App.css';
 
export default function App() {
  const [user, setUser] = useState(getUser());
  const [listings, setListings] = useState();

  

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/newlistings' element={<NewListingPage user={user} setUser={setUser} listings={listings}  setListings={setListings} />} />
            
            <Route path='/listings' element={<ListingsPage user={user} setUser={setUser}  listings={listings}  />} />
           
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
