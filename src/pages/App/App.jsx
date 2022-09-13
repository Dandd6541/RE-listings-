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
import EditListingPage from '../EditListingPage/EditListingPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [listings, setListings] = useState([]);
  const navigate = useNavigate();


  useEffect(function () {
    async function getListings() {
      const allListings = await listingsAPI.getAll();
      // console.log(allListings);
      setListings(allListings);

    }
    getListings();
  }, []);


  async function handleUpdateListing(listingFormData, id) {
    const updatedListings = await listingsAPI.updateListings(id, listingFormData);
    setListings(updatedListings);
    navigate('/listings');
  }

  async function handleDelete(id) {
    await listingsAPI.deleteListing(id);
    const remainingLisitings = listings.filter(listing => listing._id !== id);
    setListings(remainingLisitings);
  }

  async function handleAddListing(evt, newListing) {
    evt.preventDefault();
    const listing = await listingsAPI.addListing(newListing);
    setListings([ ...listings, listing ])
    navigate('/listings')
  }


  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/listings/new' element={<NewListingPage handleAddListing={handleAddListing} />} /> 
            <Route path="/" element={<LandingPage />} />
            <Route path='/listings/:id/edit' element={<EditListingPage handleUpdateListing={handleUpdateListing} listings={listings} />} /> 

            <Route path='/listings' element={<ListingsPage user={user} setUser={setUser} listings={listings} handleDelete={handleDelete}  setListings={setListings} />} />

          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
