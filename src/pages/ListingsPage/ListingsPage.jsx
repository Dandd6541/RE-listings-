import ListingCard from "../../components/ListingCard/ListingCard";
import * as listingsAPI from '../../utilities/listings-api';
import { useEffect } from 'react';
import './ListingPage.css';

export default function ListingsPage({ listings, handleDelete, editListing, setListings }) {

  useEffect(function () {
    async function getListings() {
      const allListings = await listingsAPI.getAll();
      setListings(allListings);
    }
    getListings();
  }, []);

  return (

    <>
    <h1>Listings Page</h1>
      <main className="ListingsPage">
        {listings.map(listing =>
          <ListingCard
            editListing={editListing}
            handleDelete={handleDelete}
            listing={listing}
            key={listing._id}

          />

        )}
      </main>
   </>
  


  );
}