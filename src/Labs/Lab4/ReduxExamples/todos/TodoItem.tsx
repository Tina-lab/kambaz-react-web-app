import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
interface TodoItemProps {
  todo: {
    id: string;
    title: string;
  };
}
export default function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();
  console.log(todo);
  return (
    <li key={todo.id} className="list-group-item d-flex">
      {todo.title}
      <div className="ms-auto">
        <button
          className="btn btn-primary ms-2 me-2"
          onClick={() => dispatch(setTodo(todo))}
          id="wd-set-todo-click"
        >
          Edit
        </button>
        <button
          className="btn btn-danger me-2"
          onClick={() => dispatch(deleteTodo(todo.id))}
          id="wd-delete-todo-click"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
