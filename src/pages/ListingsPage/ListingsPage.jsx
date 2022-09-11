import ListingCard from "../../components/ListingCard/ListingCard";
import { useState, useEffect } from 'react';
import NewListingPage from "../NewListingPage/NewListingPage";

export default function ListingsPage({ listings, ListingsPage }) {

   
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
    return (
      <>
    <h1>hello</h1> 
    <main className="ListingsPage">
      {newListings}
    </main>
     </>
  );
}