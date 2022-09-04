import ListingHistoryPage from "./ListingHistoryPage";


export default function ListingPage({ listings }) {
  return (
    <ul>
      {listings.map((s, idx) => (
        <ListingHistoryPage listings={l} key={idx} />
      ))}
    </ul>
  );
  
}
