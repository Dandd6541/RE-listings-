import { useParams } from "react-router-dom";
import { useState } from "react";
import './EditListingPage.css';

export default function EditListingPage({ handleUpdateListing, listings }) {
  const {id} = useParams();
  let editListing = listings.find(listing => listing._id === id );
  const [newListing, setNewListing] = useState(editListing);
  if(!editListing) return null;

  function handleChange(evt) {
    const updatedListing = { ...newListing, [evt.target.name]: evt.target.value };
    setNewListing(updatedListing);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    handleUpdateListing(newListing, id )
  }

  return (

    <>
      <h1>Edit Lisiting</h1>

      <form onSubmit={handleSubmit} className="NewListingForm">

        <input type='text' value={newListing.price} name="price" onChange={handleChange}></input>
        <label>Price:</label>

        <input type='text' value={newListing.address} name="address" onChange={handleChange}></input>
        <label>Address:</label>

        <input type="text" value={newListing.description} name="description" onChange={handleChange} />
        <label>Description:</label>

        <ul>
          <button type="submit" >Edit Lisitng</button>
        </ul>
      </form>
    </>
  );

}