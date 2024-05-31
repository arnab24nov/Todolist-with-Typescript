import React, { useState } from "react";
import { Todo } from "./model";
import TodoCard from "./TodoCard";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  console.log("TodoList rendered");
  return (
    <div className="flex flex-col justify-around md:flex-row md:items-start gap-6 mx-8">
      <div className="bg-cyan-300 p-6 md:flex-1 flex-0 rounded-lg">
        <div className="text-[24px] text-white mb-4">Active Tasks</div>
        <div className="overflow-y-auto max-h-96 flex flex-col items-center">
          {todos
            .filter((todo) => !todo.isDone)
            .reverse()
            .map((todo) => (
              <TodoCard
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
        </div>
      </div>
      <div className="bg-red-400 p-6 flex-1 rounded-lg overflow-y-auto">
        <div className="text-[24px] text-white mb-4">Completed Task</div>
        <div className="overflow-y-auto max-h-96 flex flex-col items-center">
          {todos
            .filter((todo) => todo.isDone)
            .reverse()
            .map((todo) => (
              <TodoCard
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
