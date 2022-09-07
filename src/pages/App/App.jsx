import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewListingPage from '../NewListingPage/NewListingPage';
import ListingHistoryPage from '../ListingHistoryPage/ListingHistoryPage';
//  import ListingsPage from '../ListingsPage/ListingsPage'; 
import NavBar from '../../components/NavBar/NavBar';  
import './App.css';
 
export default function App() {
  const [user, setUser] = useState(getUser());
  const [setListings, listings] = useState();

  function addListing(listings) {
    setListings([...listings]);
  }

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/newlistings' element={<NewListingPage user={user} setUser={setUser} listings={listings} addListing={addListing} />} />
            
            <Route path='/listings' element={<ListingHistoryPage user={user} setUser={setUser} listings={listings} addListing={addListing} />} />
           
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
