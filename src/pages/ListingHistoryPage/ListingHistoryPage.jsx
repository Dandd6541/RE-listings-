
export default function ListingHistoryPage({ listings }) {
  return (
    <ul>
      <li className="ListingHistoryPage">
        {listings.name}
        <span className="level">Level {listings.level}</span>
        <ListingHistoryPage listings={listings} />
          
      </li>
    </ul>
  );
}
