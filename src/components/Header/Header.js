import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const toDos = useSelector((state) => state);

  return (
    <header className="w-full h-16 px-8 flex justify-between items-center bg-slate-400">
      <h1 className="text-3xl font-semibold">Redux ToDo</h1>
      <span className="py-1 px-4 bg-slate-800 text-white rounded-md font-semibold">
        {toDos.length} {toDos.length > 1 ? "Tasks" : "Task"}
      </span>
    </header>
  );
};

export default Header;
