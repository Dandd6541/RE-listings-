import * as listingsAPI from '../../utilities/listings-api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function ListingCard({ listing, handleDelete }) {
  const navigate = useNavigate();

  return (
    
    <div className="contained">
      <div className="listCard">
        <h2>Listings</h2>
        <h3>Item: {listing.address}</h3>
        <h3>Description: {listing.description}</h3>
        <h3>Price: ${listing.price}</h3>
        <button onClick={() => navigate(`/listings/${listing._id}/edit`)}>UPDATE</button>
        <button onClick={() => handleDelete(listing._id)}>DELETE</button>
      </div>
    </div>
    
  )
}


