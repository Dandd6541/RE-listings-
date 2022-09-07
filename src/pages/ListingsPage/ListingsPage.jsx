import { useEffect, useState } from "react";


export default function Listings({ user }) {
  const [listings, setListings] = useState([]);
  async function getListings() {
    const listings = await getAll();
    setListings(listings);
  }
  useEffect(() => {
    getListings();
  }, []);

  return (
    <div>
      {listings.map(function (Listing) {
        return (
          <ListingCard />
        );
      })}
    </div>
  );








}