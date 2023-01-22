import React from "react";
import { useDispatch } from "react-redux";
import { toDoActions } from "../../store/to-dos-slice";

const ToDoItem = ({ toDoItem, onUpdateToDo }) => {
  const dispatch = useDispatch();

  const deleteToDoHandler = (id) => {
    dispatch(toDoActions.deleteToDo(id));
  };

  return (
    <li className="w-full p-6 rounded-md shadow-lg bg-slate-200 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-medium mb-2">{toDoItem.task}</h3>
        <p>{toDoItem.description}</p>
      </div>
      <div className="space-x-2">
        <button
          onClick={onUpdateToDo.bind(null, toDoItem)}
          className="bg-slate-400 p-2 rounded-md"
        >
          Edit
        </button>
        <button
          onClick={deleteToDoHandler.bind(null, toDoItem.id)}
          className="bg-slate-400 p-2 rounded-md"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
