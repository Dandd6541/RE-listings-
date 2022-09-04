
export default function ListingHistoryPage({ listing }) {
  return (
    <ul>
      <li className="ListingHistoryPage">
        {listing.name}
        <span className="level">Level {listing.level}</span>
      </li>
    </ul>
  );
}
