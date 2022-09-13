import ListingCard from "../../components/ListingCard/ListingCard";
import * as listingsAPI from '../../utilities/listings-api';
import { useEffect } from 'react';
import './ListingPage.css';

export default function ListingsPage({listings, routeChange, setListings, editListing}) {

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
      editListing={editListing}
      routeChange={routeChange}
      listing={i}
      key={i._id}
      />
      )};
    </main>
     </>
  );
}