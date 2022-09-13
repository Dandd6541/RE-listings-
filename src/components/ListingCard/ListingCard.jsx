import * as listingsAPI from '../../utilities/listings-api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import NewListingPage from '../../pages/NewListingPage/NewListingPage';

export default function ListingCard({listing, setListing, routeChange, editListing}) { 
    const [listingUpdated, setListingUpdated ] = useState(false);

    const navigate = useNavigate; 

    async function handleDelete(id) {
        await listingsAPI.deleteListing(id);
        navigate("/listings");
      }
    return ( 
        <>

        <div className="contained">
            {listingUpdated ? <NewListingPage listing={listing} listingUpdated={listingUpdated} setListingUpdated={setListingUpdated} editListing={editListing} /> :
            
         <div className="listCard">
        <h2>Listings</h2>
        <h3>Item: {listing.address}</h3>
        <h3>Description: {listing.description}</h3>
        <h3>Price: ${listing.price}</h3>
        <a href={`/profile/${listing.user}`}>Contact Seller: {listing.user}</a>
        <button onClick={()=> setListingUpdated(!listingUpdated)}>Update</button>
        {/* <button onClick={() => handelEdit(listing._id)}>Edit</button>  */}
        <button onClick={()=> handleDelete(listing._id)}>DELETE</button> 
          
          </div>
          }
        </div>
        </>
    )
}


