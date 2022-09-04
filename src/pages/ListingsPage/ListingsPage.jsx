import ListingHistoryPage from "./ListingHistoryPage";


export default function ListingsPage({ listings }) {
  return (
    <ul>
      {listings.map((l, idx) => (
        <ListingHistoryPage listings={l} key={idx} />
      ))}
    </ul>
  );
  
}
