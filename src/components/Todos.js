import Todo from './Todo.js';

export default function Todos ({ todos, done, remove }) {
  return (
    <>
      {
        todos?.length > 0 ?
        (<ul className="todos">
          {
            todos.map(todo =>
              <Todo
                key={todo.id}
                todo={todo}
                done={done}
                remove={remove}
              />
            )
          }
        </ul>)
        : (
          <div className='empty-todos'>
            Empty todos
          </div>
        )
      }
    </>
  );
};