import { useState, useEffect } from "react";
import * as listingsAPI from '../../utilities/listings-api';

export default function NewListingPage({ listings, setListings }) {
  const [newListing, setNewListing] = useState({ 
    address:"",
    price: "",
    description: ""
   });
   useEffect(function() {
    async function getListings() {
      const allListings = await listingsAPI.getAll();
      setListings(allListings);
    } 
    getListings();
   },[] ) 

   async function addListing(listingFormData) {
    const listing = await listingsAPI.addOne(listingFormData);
    setListings([...listing, listing]);
  }

  

  function handleListing(evt) {
    evt.preventDefault();
    addListing(newListing);
    setNewListing({
      address:"",
    price: "",
    description: ""

    });
   
  }

    
  function handleChange(evt) {
    setNewListing({ ...newListing, [evt.target.name]: evt.target.value });
   
  }

  return (
    <>
    <h1>hello P4</h1>
    <form onSubmit={handleListing} className="NewListingForm"> 

      <input type='text' value={newListing.price} name="price" onChange={handleChange}></input>
      <label>price</label>
      
      <input type='text' value={newListing.address} name="address" onChange={handleChange}></input>
      <label>address</label>
     
      <input type="text" value={newListing.description} name="description" onChange={handleChange} /> 
      <label>description:</label>
     
      
      <button type="submit" >Add Listing</button>
    
    </form>
    </>
  );
}


