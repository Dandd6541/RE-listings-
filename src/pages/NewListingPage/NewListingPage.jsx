import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as listingsAPI from '../../utilities/listings-api';
import './NewListingPage.css';
export default function NewListingPage({ listings, setListings}) {

  const [newListing, setNewListing] = useState({ 
    address: "",
    price: "",
    description: "",
   }); 

   const navigate = useNavigate();

   

   async function addListing(evt) {
    evt.preventDefault();
    const listing = await listingsAPI.addListing(newListing);
   
     setNewListing(listing);
      setListings({...listings,listing})
      navigate('/listings')
   }
  //  async function deleteListing(listingFormData) {
  //   const listing = await listingsAPI.deleteOne(listingFormData);
  //    setListings([...listings, listing]);
  //  }

  

  
  
  
  function handleChange(evt) {
    setNewListing({ ...newListing, [evt.target.name]: evt.target.value });
    
  }
 



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

  function handleChange(evt) {
    const NewListingData = { ...newListing, [evt.target.name]: evt.target.value };
     setNewListing(NewListingData);
  }

  return (
    <>
    <h1>hello P4</h1>
    <form onSubmit={addListing} className="NewListingForm"> 
      
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


