export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Your packing list is empty. Start adding some items 🧳</em>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercent = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      {numPercent === 100 ? (
        <em>You are ready to go ✈️</em>
      ) : (
        <em>
          💼 You have {numItems} items on your list, and you already packed{" "}
          {numPacked} ({numPercent}%)! ✈️
        </em>
      )}
    </footer>
  );
}
