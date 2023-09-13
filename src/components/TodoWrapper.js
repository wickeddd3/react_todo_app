import { useState } from 'react';
import TodoInput from './TodoInput.js';
import ButtonAdd from './ButtonAdd.js';
import Todos from './Todos.js';

export default function TodoWrapper() {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);

  function handleSetTodo(todo) {
    setTodoInput(todo);
  }

  function handleAddTodo() {
    if (todoInput) {
      const currentTodos = [...todos];
      currentTodos.push({
        id: currentTodos.length + 1,
        name: todoInput,
        done: false,
      });
      setTodos(currentTodos);
      setTodoInput('');
    }
  }

  function handleDeleteTodo(todo) {
    const currentTodos = [...todos];
    const index = currentTodos.findIndex((item) => item.id === todo.id);
    currentTodos.splice(index, 1);
    setTodos(currentTodos);
  }

  function handleMarkTodoAsDone(todo) {
    const currentTodos = [...todos];
    const index = currentTodos.findIndex((item) => item.id === todo.id);
    currentTodos[index] = {
      ...currentTodos[index],
      done: true,
    };
    setTodos(currentTodos);
  }

  return (
    <div className="todos-wrapper">
      <div className="todo-input">
        <TodoInput
          todo={todoInput}
          setTodo={handleSetTodo}
        />
        <ButtonAdd addTodo={handleAddTodo} />
      </div>
      <Todos
        todos={todos}
        done={handleMarkTodoAsDone}
        remove={handleDeleteTodo}
      />
    </div>
  );
}
