import React, { useEffect, useReducer, useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { Todo } from "./model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoCard: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [isEditting, setIsEditting] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, [isEditting]);

  const handleEditTodo = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => {
        if (todo.id === parseInt(e.currentTarget.dataset.id ?? "0")) {
          return { ...todo, todo: editTodo };
        } else {
          return todo;
        }
      })
    );
    setIsEditting(!isEditting);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleChangeStatus = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      })
    );
  };

  console.log("TodoCard rendered");
  return (
    <div className="w-[96%] text-[20px] p-4 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-600 flex justify-between items-center mb-2 rounded-lg hover:scale-[1.03] hover:shadow-active-black">
      {isEditting ? (
        <form onSubmit={handleEditTodo} data-id={todo.id}>
          <input
            ref={inputRef}
            className="outline-none px-2 rounded-lg"
            type="text"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        </form>
      ) : (
        <div className={`${todo.isDone && "line-through"}`}>{todo.todo}</div>
      )}
      <div className="flex cursor-pointer">
        {!todo.isDone && (
          <MdEdit
            className="mr-4 hover:scale-110"
            onClick={() => setIsEditting(true)}
          />
        )}
        <MdDelete
          className="mr-4 hover:scale-110"
          onClick={() => handleDeleteTodo(todo.id)}
        />
        <MdDone
          className="hover:scale-110"
          onClick={() => handleChangeStatus(todo.id)}
        />
      </div>
    </div>
  );
};

export default TodoCard;
