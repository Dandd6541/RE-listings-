import NewListingPage from "../../pages/NewListingPage/NewListingPage";



export default function ListingCard({listing}) { 

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
       
             : (
                <></>
            );
        </div>
        </div>
        </div>
        </>
    )
}
