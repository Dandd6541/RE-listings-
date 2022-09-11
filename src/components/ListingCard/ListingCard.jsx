import * as listingsAPI from '../../utilities/listings-api';
import { useNavigate } from "react-router-dom";

export default function ListingCard({listing, setListing}) { 

    async function handleDelete(id) {
        await listingsAPI.deleteListing(id);
        navigate('/listings');
      }
    return ( 
        <>
        <div className="container">
        <div className="contained">
        <div className="listCard">
        <h2>Item / Service</h2>
        <h3>Item: {listing.address}</h3>
        <h3>Description: {listing.description}</h3>
        <h3>Price: ${listing.price}</h3>
        <a href={`/profile/${listing.user}`}>Contact Seller: {listing.user}</a>
        <button onClick={()=> handleDelete(listing._id)}>DELETE</button>
             : (
                <></>
            );
        </div>
        </div>
        </div>
        </>
    )
}
