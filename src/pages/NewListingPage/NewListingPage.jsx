import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as listingsAPI from '../../utilities/listings-api';
import './NewListingPage.css';

export default function NewListingPage({ listing, listings, setListings, listingUpdated, setListingUpdated, editListing}) {

  const [newListing, setNewListing] = useState({ 
    address: "",
    price: "",
    description: "",
   }); 

   const navigate = useNavigate();

   

   async function addListing(evt) {
    evt.preventDefault();
    if (listing) {
      editListing(newListing, listing._id);
      setListingUpdated(!listingUpdated);
    
    } else {
      const listing = await listingsAPI.addListing(newListing);
     
       setNewListing(listing);
        setListings({...listings,listing})
        navigate('/listings')

    }
   }
   


  function handleChange(evt) {
    const NewListingData = { ...newListing, [evt.target.name]: evt.target.value };
     setNewListing(NewListingData);
  }

  return (

    <>
    <h1>{ listing ? "editListing" : "newListing" }</h1>
    <h1>hello P4</h1>
    <form onSubmit={addListing} className="NewListingForm"> 
      
      <input type='text' value={newListing.price} name="price" onChange={handleChange}></input>
      <label>Price:</label>
      
      <input type='text' value={newListing.address} name="address" onChange={handleChange}></input>
      <label>Address:</label>
     
      <input type="text" value={newListing.description} name="description" onChange={handleChange} /> 
      <label>Description:</label>
      
      <ul>
      <button type="submit" >{listing ? "editListing" : "newListing" }</button>
      </ul>
    </form>
    </>
  );
}


