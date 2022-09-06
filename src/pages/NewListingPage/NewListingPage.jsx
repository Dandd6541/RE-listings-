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
   
  }

    
  function handleChange(evt) {
    const NewListingData = { ...NewListing, [evt.target.name]: evt.target.value };
    setNewListing(NewListingData);
  }

 

  return (
    <>
    <h1>hello</h1>
    <form onSubmit={handleListing} className="NewListingForm">

      <input value={NewListing.name} name="name" onChange={handleChange}></input>
      <label>Level</label>

      <select value={NewListing.level} name="level" onChange={handleChange}>
        <label>Address:
          <input type="text" name="address" />
        </label>

        <label>Price:
          <input type="number" name="price" />
        </label>
       

      </select>
      <button>Add Listing</button>
    </form>
    </>
  );
}


