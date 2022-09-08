import NewListingPage from '../NewListingPage/NewListingPage';


export default function ListingsPage({ listings, ListingsPage }) {
  const NewListingPage = listings.map(i =>
    <NewListingPage
      listing={i}
      isSelected={i === ListingsPage}
      
      key={i._id}
    />
  );
  return (
    <main className="ListingsPage">
      {listings}
    </main>
  );
}