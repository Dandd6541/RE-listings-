import ListingCard from "../../components/ListingCard/ListingCard";
import * as listingsAPI from '../../utilities/listings-api';
import NewListingPage from "../NewListingPage/NewListingPage";
import { getUser } from '../../utilities/users-service';

import { useState, useEffect } from 'react';

export default function ListingsPage({listings, routeChange}) {

  const [user, setUser] = useState(getUser());
  const [bestListings, setBestListings] = useState(listings);
       
  useEffect(function() {
    async function getListings() {
      const allListings = await listingsAPI.getAll();
      setBestListings(allListings);
    } 
    getListings();
   },[listings]); 
   console.log(bestListings);

  
   
   return (
     <>
    <h1>hello</h1> 
    <main className="ListingsPage">
     {bestListings.map(i =>
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