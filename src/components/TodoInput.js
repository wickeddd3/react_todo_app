export default function TodoInput({ todo, setTodo }) {
  return (
    <input
      type="text"
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
    />
  );
}
