import CheckboxDone from "./CheckboxDone.js";
import ButtonDelete from "./ButtonDelete.js";

export default function Todo ({ todo, done, remove }) {
  return (
    <li className="todo-item">
      <CheckboxDone done={ () => done(todo) } />
      { todo.done ? (<del><span className="todo-name">{ todo.name }</span></del>)
      : (<span className="todo-name">{ todo.name }</span>)
      }
      <ButtonDelete remove={ () => remove(todo) } />
    </li>
  );
};