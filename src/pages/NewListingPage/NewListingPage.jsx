import { useState, useEffect } from "react";
import * as listingsAPI from '../../utilities/listings-api';

export default function NewListingPage({ listings, setListings }) {
  const [NewListing, setNewListing] = useState({ 
    address:"",
    price: "",
    description: ""
   });
   useEffect(function() {
    async function getListings() {
      const allListings = await listingsAPI.getAll();
      setListings(allListings);
    }
   },[] ) 

   async function addListing(listingFormData) {
    const listing = await listingAPI.addOne(listingFormData);
    setListings([...listing, listing]);
  }

  

  function handleListing(evt) {
    evt.preventDefault();
    addListing(NewListing);
    setNewListing({
      address:"",
    price: "",
    description: ""

    });
   
  }

    
  function handleChange(evt) {
    const NewListingData = { ...NewListing, [evt.target.name]: evt.target.value };
    setNewListing(NewListingData);
  }

  return (
    <>
    <h1>hello P4</h1>
    <form onSubmit={handleListing} className="NewListingForm"> 

      <input value={NewListing.price} name="price" onChange={handleChange}></input>
      <label>price</label>
      
      <input value={NewListing.address} name="address" onChange={handleChange}></input>
      <label>address</label>
     
      <input name="description" onChange={handleChange} /> 
      <label>description:</label>
     
      
      <button type="Submit" onClick={handleChange}>Add Listing</button>
    
    </form>
    </>
  );
}


