import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Searchbox from "./components/Searchbox";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";

function App() {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    todo && setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
    setTodo("");
  };

  console.log("app rendered");
  return (
    <div
      className={`${
        isFocused ? "bg-sky-800" : "bg-sky-400"
      } md:h-screen font-neucha pb-6`}
    >
      <Header />
      <Searchbox
        setIsFocused={setIsFocused}
        todo={todo}
        setTodo={setTodo}
        handleSubmit={handleSubmit}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
