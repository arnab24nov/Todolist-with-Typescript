import React from "react";

interface Props {
  todo: string;
  setTodo: (todo: string) => void;
  setIsFocused: (isFocused: boolean) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const Searchbox: React.FC<Props> = ({
  setIsFocused,
  todo,
  setTodo,
  handleSubmit,
}) => {
  return (
    <form
      className="w-[85%] md:w-[500px] mx-auto p-2 rounded-full bg-white flex mb-10"
      onSubmit={handleSubmit}
    >
      <input
        className="grow px-4 text-[24px] text-slate-500 outline-none active:bg-white"
        type="text"
        name="todo"
        value={todo}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a Todo"
      />
      <button className=" bg-sky-500 w-10 h-10 rounded-full shadow-custom-black hover:bg-sky-400 active:scale-90 active:shadow-active-black">
        Go
      </button>
    </form>
  );
};

export default Searchbox;
