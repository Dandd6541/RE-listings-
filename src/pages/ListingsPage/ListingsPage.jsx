import ListingCard from "../../components/ListingCard/ListingCard";
import * as listingsAPI from '../../utilities/listings-api';
import NewListingPage from "../NewListingPage/NewListingPage";

import { useState, useEffect } from 'react';

export default function ListingsPage({getUser}) {

  const [user, setUser] = useState(getUser());
  const [listings, setListings] = useState();
     
  useEffect(function() {
    async function getListings() {
      const allListings = await listingsAPI.getAll();
      setListings(allListings);
    } 
    getListings();
   },[]); 

  
   const newListings = listings.map(i =>
    <ListingCard
    listing={i}
    key={i._id}
    />
    );
    console.log(listings);
    return (
      <>
    <h1>hello</h1> 
    <main className="ListingsPage">
      {newListings}
    </main>
     </>
  );
}