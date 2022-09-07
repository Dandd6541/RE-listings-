



export default function ListingHistoryPage({ listings }) {
  return (
    

    <ul>
      {listings.map((l, idx) => (
        <ListingHistoryPage listing={l} key={idx} />
      ))}
    </ul>
  );
}
