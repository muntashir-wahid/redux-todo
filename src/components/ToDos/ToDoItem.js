import React from "react";

const ToDoItem = ({ toDoItem }) => {
  return (
    <li className="w-full p-6 rounded-md shadow-lg bg-slate-200 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-medium mb-2">{toDoItem.task}</h3>
        <p>{toDoItem.description}</p>
      </div>
      <div className="space-x-2">
        <button className="bg-slate-400 p-2 rounded-md">Edit</button>
        <button className="bg-slate-400 p-2 rounded-md">Delete</button>
      </div>
    </li>
  );
};

export default ToDoItem;
