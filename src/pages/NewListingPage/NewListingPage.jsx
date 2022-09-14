import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as listingsAPI from '../../utilities/listings-api';
import './NewListingPage.css';

export default function NewListingPage({ handleAddListing }) {

  const [newListing, setNewListing] = useState({
    address: "",
    price: "",
    description: "",
  });

  function handleChange(evt) {
    const NewListingData = { ...newListing, [evt.target.name]: evt.target.value };
    setNewListing(NewListingData);
  }

  return (

    <>
      <h1>Create Lisiting</h1>

      <form onSubmit={evt => handleAddListing(evt, newListing)} className="NewListingForm">

        <input type='text' value={newListing.price} name="price" onChange={handleChange}></input>
        <label>Price:</label>

        <input type='text' value={newListing.address} name="address" onChange={handleChange}></input>
        <label>Address:</label>

        <input type="text" value={newListing.description} name="description" onChange={handleChange} />
        <label>Description:</label>

        <ul>
          <button type="submit" >Create Listing</button>
        </ul>
      </form>
    </>
  );
}


