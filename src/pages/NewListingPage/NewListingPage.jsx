import { useState } from "react";

export default function NewListingPage({ addListing }) {
  const [NewListing, setNewListing] = useState({ 
    address:"",
    price: "",
    description: ""
   });

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
    <h1>hello</h1>
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


