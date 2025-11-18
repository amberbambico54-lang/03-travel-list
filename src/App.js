const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 🧳</h1>;
}
function Form() {
  return (
    <div>
      <h3>What do you need for your trip?</h3>
      <form>
        <select>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
            return <option value={num}>{num}</option>;
          })}
        </select>
        <input type="text" placeholder="Item..." />
        <button>Add</button>
      </form>
    </div>
  );
}
function PackingList() {}
function Stats() {
  return (
    <footer>
      💼 You have 0 items on your list, and you are ready to go! ✈️
    </footer>
  );
}

export default App;
