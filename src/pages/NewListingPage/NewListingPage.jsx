import { useState, useEffect } from "react";
import * as listingsAPI from '../../utilities/listings-api';
import './NewListingPage.css';
export default function NewListingPage({ listings, setListings}) {

  const [newListing, setNewListing] = useState({ 
    address: "",
    price: "",
    description: "",
   }); 
  

   useEffect(function() {
    async function getListings() {
      const allListings = await listingsAPI.getAll();
      setListings(allListings);
    } 
    getListings();
   },[]); 

   async function addListing(listingFormData) {
    const listing = await listingsAPI.addOne(listingFormData);
     setListings([...listings, listing]);
   }

  

  function handleListing(evt) {
    evt.preventDefault();
    addListing(newListing);
    setNewListing({
    address:"",
    price: "",
    description: "",
      
    });
  }
  
  
  function handleChange(evt) {
    setNewListing({ ...newListing, [evt.target.name]: evt.target.value });
    
  }
  console.log(setNewListing);



// export default function NewListingPage({ addListing }) {
//   const [NewListing, setNewListing] = useState({
//     address: "add address",
//     price: 3,
//     description: ''
//   });

//   function handleListing(evt) {
//     evt.preventDefault();
//     addListing(NewListing);
//     setNewListing({
//       name: "",
//       level: 3
//     });
//   }

//   function handleChange(evt) {
//     const NewListingData = { ...NewListing, [evt.target.name]: evt.target.value };
//     setNewListing(NewListingData);
//   }

  return (
    <>
    <h1>hello P4</h1>
    <form onSubmit={handleListing} className="NewListingForm"> 
      
      <input type='text' value={newListing.price} name="price" onChange={handleChange}></input>
      <label>Price:</label>
      
      <input type='text' value={newListing.address} name="address" onChange={handleChange}></input>
      <label>Address:</label>
     
      <input type="text" value={newListing.description} name="description" onChange={handleChange} /> 
      <label>Description:</label>
      
      <ul>
      <button type="submit" >Add Listing</button>
      </ul>
    </form>
    </>
  );
}


