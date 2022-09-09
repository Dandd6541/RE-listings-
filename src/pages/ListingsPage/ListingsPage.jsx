import ListingCard from "../../components/ListingCard/ListingCard";
import NewListingPage from "../NewListingPage/NewListingPage";

export default function ListingsPage({ listings, ListingsPage }) {
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