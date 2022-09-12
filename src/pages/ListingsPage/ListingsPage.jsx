import ListingCard from "../../components/ListingCard/ListingCard";
import * as listingsAPI from '../../utilities/listings-api';
import { useEffect } from 'react';

export default function ListingsPage({listings, routeChange, setListings}) {

  useEffect(function() {
    async function getListings() {
      const allListings = await listingsAPI.getAll();
      setListings(allListings);
    } 
    getListings();
   },[]); 
  
   return (
     <>
    <h1>hello</h1> 
    <main className="ListingsPage">
     {listings.map(i =>
      <ListingCard
      routeChange={routeChange}
      listing={i}
      key={i._id}
      />
      )};
    </main>
     </>
  );
}