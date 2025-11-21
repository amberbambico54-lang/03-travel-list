export default function Item({ item, onPacked, onDelete }) {
  return (
    <li className="">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onPacked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <span>{item.quantity}</span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}
