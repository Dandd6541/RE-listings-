import { useState } from 'react';

export default function NewListingPage({ addListing }) {

  function handleListing(evt) {
    evt.preventDefault();
    addListing(NewListing);
    setNewListing({
      address: "",
      price: "",
      description: ""
    });
  }

  function handleChange(evt) {
    const NewSkillData = { ...NewListing, [evt.target.name]: evt.target.value };
    setNewListing(NewListingData);
  }

  return (
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
        <textarea></textarea>

      </select>

      <button>Add Listing</button>
    </form>
  );
}


